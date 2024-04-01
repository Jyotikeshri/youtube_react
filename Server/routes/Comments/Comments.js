import express from "express";
import {
  deleteComment,
  editComment,
  getAllComment,
  postComment,
} from "../../../Client/src/api/index.js";
import auth from "../../middleware/auth.js";

// import auth from "../middleware/auth.js";
const router = express.Router();

router.post("/post", auth, postComment);
router.get("/get", auth, getAllComment);
router.delete("/delete/:id", auth, deleteComment);
router.patch("/edit/:id", auth, editComment);

export default router;
