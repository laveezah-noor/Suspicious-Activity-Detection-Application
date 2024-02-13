const mongoose = require("mongoose");

// Define Alert schema
const AlertSchema = new mongoose.Schema({
  UserID: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  VideoID: {
    type: mongoose.Schema.ObjectId,
    ref: "Video",
    required: true,
  },
  AlertMessage: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
  },
  AlertTime: {
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

module.exports = Alert;
