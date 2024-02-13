const mongoose = require("mongoose");

// Define CCTV Camera schema
const CameraSchema = new mongoose.Schema({
  UserID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the user who owns this camera
    required: true,
  },
  CameraName: {
    type: String,
    required: true,
  },
  Location: {
    type: String,
  },
  Status: {
    type: Boolean,
  },
  LastConnection: {
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
