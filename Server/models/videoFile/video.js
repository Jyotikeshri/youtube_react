import mongoose from "mongoose";

const videoFileSchema = new mongoose.Schema(
  {
    videoTitle: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
    fileType: {
      type: String,
      required: true,
    },
    fileSize: {
      type: String,
      required: true,
    },
    dislike: {
      type: Number,
      default: 0,
    },
    desc: {
      type: String,
    },
    videoChannel: {
      type: String,
      required: true,
    },
    Like: {
      type: Number,
      default: 0,
    },
    Views: {
      type: Number,
      default: 0,
    },
    Uploader: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("VideoFiles", videoFileSchema);
