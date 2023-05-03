import express from "express";

const PORT = 4000;

const app = express();

const home = (req, res) => {
  return res.send("<h1>Home</h1>");
};
const about = (req, res) => {
  return res.send("<h1>About</h1>");
};
const contact = (req, res) => {
  return res.send("<h1>Contact</h1>");
};
const login = (req, res) => {
  return res.send("<h1>Login</h1>");
};

app.get("/", home);
app.get("/about", about);
app.get("/contact", contact);
app.get("/login", login);

const listen = () => console.log("서버 연결중");

app.listen(PORT, listen);
