import express from "express";

import { home, trending, newStory } from "../controllers/storiesController";
import { join, login } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/trending", trending);
globalRouter.get("/new", newStory);

globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
