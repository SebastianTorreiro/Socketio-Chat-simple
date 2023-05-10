import express from "express";
const router = express.Router();
import { createMessage, getAllMessages, getAllMessagesFromOneUser } from "../Controllers/Message.controller.js";

router.get("/user/:userFrom/:userTarget", getAllMessagesFromOneUser);

router.get("/all", getAllMessages);

router.post("/create", createMessage);

export default router;
