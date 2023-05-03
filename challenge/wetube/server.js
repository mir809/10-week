import express from "express";

const app = express();

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDate();

const url = (req, res, next) => {
  console.log(`Path : ${req.url}`);
  next();
};

const time = (req, res, next) => {
  console.log(`Time : ${year}년 ${month}월 ${day}일`);
  next();
};

const security = (req, res, next) => {
  if (req.protocol === "https") {
    console.log(`Now Protocol : ${req.protocol} => secure`);
  } else {
    console.log(`Now Protocol : ${req.protocol} => insecure`);
  }
  next();
};

const protector = (req, res, next) => {
  if (req.url === "/protected") {
    return res.redirect("/");
  }
  next();
};

app.use(url, time, security, protector);

app.get("/", (req, res) => res.send("<h1>Home</h1>"));
app.get("/protected", (req, res) => res.send("<h1>Protected</h1>"));

// Codesandbox gives us a PORT :)
app.listen(process.env.PORT, () => `Listening!✅`);
