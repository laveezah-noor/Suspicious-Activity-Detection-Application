const mongoose = require("mongoose");

// Define CCTV Camera schema
const CameraSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the user who owns this camera
    required: true,
  },
  cameraName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  status: {
    type: Boolean,
  },
  lastConnection: {
    type: Date,
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

// Create and export mongoose models
const Camera = mongoose.model("Camera", CameraSchema);
