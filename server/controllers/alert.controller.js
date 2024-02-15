import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Alert from "../models/alert.model.js";
import Video from "../models/video.model.js";
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
  if(!alert) throw new ApiError(409, "No alert by this id");
    
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
    const result = await Alert.create({
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

const createAlertWithUploadVideo = asyncHandler(async (req, res) => {
    const { cameraID } = req.body || req.params;
    const videoLocalPath = req.file?.path;
    if (!videoLocalPath) throw new ApiError(400, "No Video file Uploaded");

    const video = await uploadOnCloudinary(videoLocalPath);
    if (!video?.url)
        throw new ApiError(400, "Error while uploading video to Cloudinary");

    const vidResult = await Video.create({
        videoURL: video.url,
        duration: video.duration
    })

    console.log("Video uploaded Successfully", vidResult);
        const { 
            alertMessage,
            image,
            description,
            alertTime,
            seenStatus } = req.body;
        // validation - not empty
        if (!alertMessage) {
            throw new ApiError(400, "Camera Name fields must be filled out");
          }
        const result = await Alert.create({
            userID:req.user._id,
            videoID: vidResult._id,
            alertMessage,
            image,
            description,
            alertTime : new Date(),
            seenStatus
        })
        return res
            .status(200)
            .json(new ApiResponse(200, result, "Alert added Successfully"));
  });

export { getAllAlerts, getAlertById, createAlert, createAlertWithUploadVideo };
