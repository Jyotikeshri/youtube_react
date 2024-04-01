import express from "express";
import dotenv from "dotenv";
import { connect_db } from "./db/db_connect.js";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use("/uploads", express.static(path.join("uploads")));

connect_db();

import userRoutes from "./routes/user/userRoutes.js";
import videoRoutes from "./routes/videos/videoRoute.js";
import commentsRoutes from "./routes/Comments/Comments.js";

app.use("/user", userRoutes);
app.use("/video", videoRoutes);
app.use("/comment", commentsRoutes);

app.get("/", (req, res) => {
  res.send("welcome to server");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
