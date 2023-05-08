export const home = (req, res) =>
  res.render("stories/home", { pageTitle: "Home" });

export const trending = (req, res) =>
  res.render("stories/trending", { pageTitle: "Trending" });

export const newStories = (req, res) =>
  res.render("stories/new", { pageTitle: "New Story" });

export const seeStory = (req, res) => {
  const { id } = req.params;
  return res.render("stories/story", { pageTitle: "See Story", id });
};

export const editStory = (req, res) => {
  const { id } = req.params;
  return res.render("stories/storyEdit", { pageTitle: "Edit Story", id });
};

export const deleteStory = (req, res) => {
  const { id } = req.params;
  return res.render("stories/storyDelete", { pageTitle: "Delete Story", id });
};
