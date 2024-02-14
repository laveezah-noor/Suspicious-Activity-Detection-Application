import mongoose from "mongoose";

// Define Video schema
const VideoSchema = new mongoose.Schema({
  cameraID: {
    type: mongoose.Types.ObjectId,
    ref: "Camera",
  },
  videoURL: {
    type: String, // cloudinary url
    required: true,
  },
  thumbnail: {
    type: String,
  },
  duration: {
    type: Number,
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

export default Video;
