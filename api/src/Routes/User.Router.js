import express from "express";
import {
  deleteAllUsers,
  getAllUsers,
} from "../Controllers/User.controller.js";

const router = express.Router();



router.get("/all", getAllUsers);

router.post('/delete', deleteAllUsers)

export default router;
