import mongoose from "mongoose";
import users from "../../models/user/user.js";

export const getAllChannels = async (req, res) => {
  try {
    const allChannels = await users.find();

    const allChannelDetails = [];
    allChannels.forEach((chanel) => {
      allChannelDetails.push({
        _id: chanel._id,
        name: chanel.name,
        email: chanel.email,
        desc: chanel.desc,
        image: chanel.image,
      });
    });
    res.status(200).json(allChannelDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateChannelData = async (req, res) => {
  const { id: _id } = req.params;
  const { name, desc } = req.body;
  console.log("updated data controller", req.body);

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Channel Unavailable..");
  }
  try {
    const updateData = await users.findByIdAndUpdate(
      _id,
      {
        $set: {
          name: name,
          desc: desc,
        },
      },
      { new: true }
    );

    res.status(200).json(updateData);
  } catch (error) {
    res.status(405).json({ message: error.message });
  }
};

// import likedVideo from "../../models/likedVideo/likedVideo.js";
// import mongoose from "mongoose";

// export const subChannelController = async (req, res) => {
//   const subChannel = req.body;

//   console.log(subChannel);
//   const addToLikedVideo = new likedVideo(subChannel);

//   try {
//     await addToLikedVideo.save();
//     res.status(200).json("added to likedVideo");
//     // console.log("DOne")
//   } catch (error) {
//     res.status(400).json(error);
//   }
// };

// export const getAlllikeVideoController = async (req, res) => {
//   try {
//     const files = await likedVideo.find();
//     res.status(200).send(files);
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// };

// export const deleteLikeVideoController = async (req, res) => {
//   const { videoId: videoId, Viewer: Viewer } = req.params;
//   // console.log(videoId,Viewer)
//   try {
//     await likedVideo.findOneAndDelete({
//       videoId: videoId,
//       Viewer: Viewer,
//     });
//     res.status(200).json({ message: "Removed  from your watch Laters" });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
