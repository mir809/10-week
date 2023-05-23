import express from "express";
import path from "path";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000 // 파일 용량 제한: 1MB (단위: byte)
  }
});

const home = (req, res) => {
  fs.readdir(`uploads`, (err, files) => {
    if (err) {
      console.log(err);
      return res.status(400).end();
    }
    return res.render("home", { pageTitle: "TXT2HTML!", files });
  });
};

const read = (req, res) => {
  const { file } = req;
  const path = file.path;

  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      const errorMessage = "Failed Convert";
      return res.render("read", { pageTitle: "READ TEXT FILE", errorMessage });
    } else {
      return res.render("read", { pageTitle: "READ TEXT FILE", data });
    }
  });
};

const getRead = (req, res) => {
  const { id } = req.params;
  const path = `uploads/` + id;

  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      const errorMessage = "Failed Convert";
      return res.render("read", { pageTitle: "READ TEXT FILE", errorMessage });
    } else {
      return res.render("read", { pageTitle: "READ TEXT FILE", data });
    }
  });
};
app.get("/", home);
app.post("/read", upload.single("text"), read);
app.get("/read/:id", getRead);

// Codesanbox does not need PORT :)
app.listen();
