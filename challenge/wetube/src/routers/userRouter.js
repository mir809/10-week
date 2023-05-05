import express from "express";

import { users, profile, editProfile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", users);
userRouter.get("/edit-profile", editProfile);
userRouter.get("/:id(\\d+)", profile);

export default userRouter;
