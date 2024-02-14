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
    .json(new ApiResponse(200, alert, "Alert fetched Successfully"));
});

const createAlert = asyncHandler(async (req, res) => {
    const { 
      videoID,
      alertMessage,
      image,
      description,
      alertTime,
      seenStatus } = req.body;
    // validation - not empty
    if (
    [   videoID,
        alertMessage,
        image,
        alertTime
    ].some(
        field => field?.trim() === "" || field?.trim() === undefined
    )
    ) {
    throw new ApiError(400, "All fields must be filled out");
    }
    const result = await Camera.create({
        userId:req.user._id,
        videoID,
        alertMessage,
        image,
        description,
        alertTime,
        seenStatus
    })
    return res
        .status(200)
        .json(new ApiResponse(200, result, "Alert added Successfully"));
});

export { getAllAlerts, getAlertById, createAlert };
