import express from "express";
const router = express.Router()
import messagesRoutes from './Message.Router.js'


router.use('/messages', messagesRoutes)




export default router