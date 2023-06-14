import express from "express";
import authRouter from './Authentication.Router.js';
import messagesRoutes from './Message.Router.js';
import userRoutes from './User.Router.js';
const router = express.Router()


router.use('/messages', messagesRoutes)
router.use('/user', userRoutes)
router.use('/auth', authRouter)





export default router