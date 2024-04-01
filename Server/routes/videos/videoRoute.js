import express from "express";
import { getAllvideos, uploadVideo } from "../../controllers/videos/video.js";
import upload from "../../Helpers/fileHelper.js";
import { likeController } from "../../controllers/like/like.js";
import {
  deleteLikeVideoController,
  getAlllikeVideoController,
  likeVideoController,
} from "../../controllers/like/likeVideo.js";

import {
  watchLaterController,
  getAllwatchLaterController,
  deletewatchLaterController,
} from "../../controllers/watchLater/watchLater.js";
import {
  HistoryController,
  deleteHistoryController,
  getAllHistoryController,
} from "../../controllers/history/history.js";
import { viewController } from "../../controllers/viewsControllers/view.js";
import auth from "../../middleware/auth.js";

// import auth from "../middleware/auth.js";

const routes = express.Router();

routes.post("/uploadVideo", auth, upload.single("file"), uploadVideo);

routes.get("/getvideos", auth, getAllvideos);
routes.patch("/like/:id", auth, likeController);
routes.patch("/view/:id", auth, viewController);

routes.post("/likeVideo", auth, likeVideoController);
routes.get("/getAlllikeVideo", auth, getAlllikeVideoController);
routes.delete(
  "/deleteLikedVideo/:videoId/:Viewer",
  auth,

  deleteLikeVideoController
);

routes.post("/watchLater", auth, watchLaterController);
routes.get("/getAllwatchLater", auth, getAllwatchLaterController);
routes.delete(
  "/deleteWatchlater/:videoId/:Viewer",
  auth,

  deletewatchLaterController
);

routes.post("/History", auth, HistoryController);
routes.get("/getAllHistory", auth, getAllHistoryController);
routes.delete("/deleteHistory/:userId", auth, deleteHistoryController);

export default routes;
