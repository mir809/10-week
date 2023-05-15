/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";
// Add your magic here!

export const home = async (req, res) => {
  const movies = await Movie.find({}).sort({ title: "asc" });
  return res.render("home", { pageTitle: "Home", movies });
};

export const getUpload = async (req, res) => {
  const nowYear = new Date().getFullYear();
  return res.render("upload", { pageTitle: "Movie Upload", nowYear });
};
export const postUpload = async (req, res) => {
  const { title, summary, year, rating, genres } = req.body;
  const newMovie = await Movie.create({
    title,
    summary,
    year,
    rating,
    genres: Movie.formatGenres(genres)
  });
  return res.redirect("/");
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);
  if (!movie) {
    return res.status(404).render("404", { pageTitle: "Movie not found." });
  }
  return res.render("watch", { pageTitle: "Watch Movie", movie });
};

export const getEdit = async (req, res) => {
  const nowYear = new Date().getFullYear();
  const { id } = req.params;
  const movie = await Movie.findById(id);
  if (!movie) {
    return res.status(404).render("404", { pageTitle: "Movie not found." });
  }
  return res.render("edit-movie", {
    pageTitle: `Edit Movie : ${movie.title}`,
    movie,
    nowYear
  });
};
export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, summary, year, rating, genres } = req.body;

  const movie = await Movie.findById(id);
  if (!movie) {
    return res.status(404).render("404", { pageTitle: "Movie not found." });
  }
  await Movie.findByIdAndUpdate(id, {
    title,
    summary,
    year,
    rating,
    genres: Movie.formatGenres(genres)
  });
  return res.redirect(`/movies/${id}`);
};

export const deleteMovie = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);
  if (!movie) {
    return res.status(404).render("404", { pageTitle: "Movie not found." });
  }
  await Movie.findByIdAndDelete(id);
  return res.redirect("/");
};

export const search = async (req, res) => {
  const { keyword } = req.query;
  let movies = [];
  if (keyword) {
    movies = await Movie.find({
      title: {
        $regex: new RegExp(keyword, "i")
      }
    }).sort({ title: "asc" });
  }
  return res.render("search", { pageTitle: "Search", keyword, movies });
};
