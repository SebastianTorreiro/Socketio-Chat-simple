import express from "express";
const router = express.Router()
import messagesRoutes from './Message.Router.js'
import userRoutes from './User.Router.js'


router.use('/messages', messagesRoutes)
router.use('/user', userRoutes)




export default router