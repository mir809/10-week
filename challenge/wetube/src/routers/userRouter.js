import express from "express";

import { seeUsers, seeUser, editProfile } from "../controllers/usersController";

const userRouter = express.Router();

userRouter.get("/", seeUsers);
userRouter.get("/:id", seeUser);
userRouter.get("/:id/edit-profile", editProfile);

export default userRouter;
