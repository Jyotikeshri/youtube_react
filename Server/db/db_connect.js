import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const db_url = process.env.DB_URL;

export const connect_db = () => {
  mongoose
    .connect(db_url)
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((err) => {
      console.log("Error Connecting to Mongoose Database", err);
    });
};
