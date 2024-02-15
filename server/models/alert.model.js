import mongoose from "mongoose";

// Define Alert schema
const AlertSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  videoID: {
    type: mongoose.Schema.ObjectId,
    ref: "Video",
    required: true,
  },
  alertMessage: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  alertTime: {
    type: Date,
    required: true,
  },
  seenStatus: {
    type: Boolean, // Alert Seen or Unseen
    default: false,
  }
},{timestamps: true});

// Create and export mongoose models
const Alert = mongoose.model("Alert", AlertSchema);

export default Alert;