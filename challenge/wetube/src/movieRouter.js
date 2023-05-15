import express from "express";

import {
  home,
  getUpload,
  postUpload,
  search,
  watch,
  getEdit,
  postEdit,
  deleteMovie
} from "./movieController.js";

const movieRouter = express.Router();

// Add your magic here!

movieRouter.get("/", home);
movieRouter.route("/upload").get(getUpload).post(postUpload);
movieRouter.get("/search", search);

movieRouter.get("/movies/:id([0-9a-f]{24})", watch);
movieRouter.route("/movies/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
movieRouter.get("/movies/:id([0-9a-f]{24})/delete", deleteMovie);

export default movieRouter;
