import express from "express";
const router = express.Router()
import createUser from '../Controllers/User.controller.js'

router.post('/create', createUser)

router.post('/login', loginUser);
export default router