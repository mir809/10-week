import {
  startDB,
  getMovies,
  getMovieById,
  getMovieByMinimumYear,
  getMovieByMinimumRating
} from "./db";

const initMovieList = async () => {
  await startDB();
  const movieList = getMovies();
  return movieList;
};

export const home = async (req, res) => {
  const movieList = getMovies().sort((a, b) => a.title.localeCompare(b.title));
  return res.render("home", { movieList });
};

export const movieDetail = (req, res) => {
  const { id } = req.params;
  const movie = getMovieById(id);
  console.log(movie.rating);
  return res.render("showMovie", { movie });
};

export const filterMovie = (req, res) => {
  const { year, rating } = req.query;
  let filtering = getMovies();
  if (year) {
    filtering = getMovieByMinimumYear(year, filtering);
  }
  if (rating) {
    filtering = getMovieByMinimumRating(rating, filtering);
  }
  if (!rating && !year) {
    return res.redirect("/");
  }
  return res.render("search", { filtering, year, rating });
};
