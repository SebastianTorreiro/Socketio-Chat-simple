import express from "express";
const router = express.Router();
import {
  createUser,
  loginUser,
  getAllUsers,
  deleteAllUsers,
} from "../Controllers/User.controller.js";

router.post("/singup", createUser);

router.post("/login", loginUser);

router.get("/all", getAllUsers);

router.post('/delete', deleteAllUsers)

export default router;
