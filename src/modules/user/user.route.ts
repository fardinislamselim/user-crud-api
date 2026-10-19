import { Router } from "express";
import userController from "./user.controller";

const router = Router();

router.post("/", userController.createUser);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.patch("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);



const userRouter = router;

export default userRouter;