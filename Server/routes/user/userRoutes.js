import express from "express";
const router = express.Router();
import { login } from "../../controllers/userControllers/userController.js";
import {
  getAllChannels,
  updateChannelData,
} from "../../controllers/channelController/channel.js";
import auth from "../../middleware/auth.js";

router.post("/login", auth, login);
// router.patch("/login/:id", updateChanelData);
router.patch("/updateChannel/:id", auth, updateChannelData);
router.get("/getAllChannels", auth, getAllChannels);

export default router;
