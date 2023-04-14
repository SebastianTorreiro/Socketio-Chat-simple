import express from "express";
const router = express.Router()
import getAllMessagesFromOneUser from '../Controllers/Message.controller.js'


router.get('/', getAllMessagesFromOneUser)







export default router