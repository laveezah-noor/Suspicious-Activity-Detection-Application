import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Alert from "../models/alert.model.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

const getAllAlerts = asyncHandler(async (req, res) => {
    const alerts = await Alert.find()

    return res
    .status(200)
    .json(new ApiResponse(200, alerts, "Alerts fetched Successfully"));
});

const getAlertById = asyncHandler(async (req, res) => {
  const { alertId } = req.body || req.params;
  const alert = await Alert.findById(alertId)

    return res
    .status(200)
    .json(new ApiResponse(200, alerts, "Alert fetched Successfully"));
});

const createAlert = asyncHandler(async (req, res) => {
    const { cameraName, location, status } = req.body;
    // validation - not empty
    if (!cameraName) {
      throw new ApiError(400, "Camera Name fields must be filled out");
    }
    const result = await Camera.create({
        cameraName,
        userId:req.user._id,
        location,
        status,
        lastConnection: new Date().getDate()
    })
    return res
        .status(200)
        .json(new ApiResponse(200, result, "Alert added Successfully"));
});

export { getAllAlerts, getAlertById, createAlert };
