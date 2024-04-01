import watchLater from "../../models/watchLater.js";
import mongoose from "mongoose";

export const watchLaterController = async (req, res) => {
  const watchLaterData = req.body;

  console.log("watch later data", watchLaterData);
  const addTowatchLater = new watchLater(watchLaterData);

  try {
    await addTowatchLater.save();
    res
      .status(200)
      .json({ message: "Added to watch later", data: addTowatchLater });
    console.log("Done");
  } catch (error) {
    console.error("Error adding to watch later:", error);
    res.status(400).json({ message: "Failed to add to watch later" });
  }
};

export const getAllwatchLaterController = async (req, res) => {
  try {
    const files = await watchLater.find().limit(50); // Limiting to 50 items, adjust as needed
    res.status(200).send(files);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const deletewatchLaterController = async (req, res) => {
  const { videoId: videoId, Viewer: Viewer } = req.params;
  // console.log(videoId,Viewer)
  try {
    await watchLater.findOneAndDelete({
      videoId: videoId,
      Viewer: Viewer,
    });
    res.status(200).json({ message: "Removed  from your watch Laters" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
