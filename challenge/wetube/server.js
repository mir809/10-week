import express from "express";

const app = express();

const URLLogger = (req, res, next) => {
  console.log("Path: ", req.path);
  next();
};

const timeLogger = (req, res, next) => {
  const now = new Date();
  console.log(`Time: ${now.getFullYear()}.${now.getMonth()}.${now.getDate()}`);
  next();
};

const protectorLogger = (req, res, next) => {
  if (req.path === "/protected") {
    return res.send("<h1>Forbidden</h1>");
  }
  next();
};

const secureLogger = (req, res, next) => {
  if (req.protocol === "https") {
    console.log("Secure ✅");
  } else {
    console.log("Insecure ❌");
  }
  next();
};

app.use(URLLogger, timeLogger, secureLogger, protectorLogger);
app.get("/", (req, res) => res.send("<h1>Home!</h1>"));
app.get("/protected", (req, res) => res.send("<h1>Protected</h1>"));

app.listen(() => `Listening!✅`);
