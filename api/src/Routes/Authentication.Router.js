import express from "express";
import { createUser, loginUser } from "../Controllers/Authentication.controller.js";
const router = express.Router()


router.post('/login', loginUser);

router.post('/singup', createUser);

export default router