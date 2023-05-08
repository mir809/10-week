export const join = (req, res) =>
  res.render("users/join", { pageTitle: "Join" });

export const login = (req, res) =>
  res.render("users/login", { pageTitle: "Log in" });

export const seeUsers = (req, res) =>
  res.render("users/usersList", { pageTitle: "Users List" });

export const seeUser = (req, res) => {
  const { id } = req.params;
  return res.render("users/profile", { pageTitle: "Profile", id });
};

export const editProfile = (req, res) => {
  const { id } = req.params;
  return res.render("users/profileEdit", { pageTitle: "Edit Profile", id });
};
