import { Router } from "express";
import userController from "./user.controller";

const userRouter = Router();

userRouter
  .route("/")
  .post(userController.createUser)
  .get(userController.getUsers);

  
userRouter
  .route("/:id")
  .get(userController.getUserById)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export default userRouter;