import express from "express";

import {
  story,
  storyEdit,
  storyDelete,
} from "../controllers/storiesController";

const storyRouter = express.Router();

storyRouter.get("/:id", story);
storyRouter.get("/:id/edit", storyEdit);
storyRouter.get("/:id/delete", storyDelete);

export default storyRouter;
