import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: { type: String, require: true },
  name: { type: String },
  desc: { type: String },
  joinedOn: { type: Date, default: Date.now },
  desc: { type: String },
  image: { type: String },
});

export default mongoose.model("User", userSchema);
