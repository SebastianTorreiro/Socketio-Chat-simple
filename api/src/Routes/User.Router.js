import express from "express";
const router = express.Router()
import createUser from '../Controllers/User.controller.js'

router.post('/singup', createUser)

router.post('/login', loginUser);
export default router