const mongoose = require("mongoose");

// Define Video schema
const VideoSchema = new mongoose.Schema({
  CameraID: {
    type: mongoose.Types.ObjectId,
    ref: "Camera",
    required: true,
  },
  VideoURL: {
    type: String, // cloudinary url
    required: true,
  },
  Thumbnail: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
},{timestamps: true});

const Video = mongoose.model("Video", VideoSchema);

module.exports = Video;
