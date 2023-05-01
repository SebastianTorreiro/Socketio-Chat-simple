import express from "express";
const router = express.Router();
import {
  createUser,
  loginUser,
  getAllUsers,
} from "../Controllers/User.controller.js";

router.post("/singup", createUser);

router.post("/login", loginUser);

router.get("/all", getAllUsers);

export default router;
