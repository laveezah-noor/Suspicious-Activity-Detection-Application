import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Camera from "../models/camera.model.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

const getAllCameras = asyncHandler(async (req, res) => {
    const cameras = await Camera.find()

    return res
    .status(200)
    .json(new ApiResponse(200, cameras, "Cameras fetched Successfully"));
});

const getCameraById = asyncHandler(async (req, res) => {
  const { cameraId } = req.body;
  const camera = await Camera.findById(cameraId)
    if(!camera) throw new ApiError(409, "No camera by this id");
      
    return res
    .status(200)
    .json(new ApiResponse(200, camera, "camera fetched Successfully"));
});

const addCamera = asyncHandler(async (req, res) => {
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
        .json(new ApiResponse(200, result, "camera uploaded Successfully"));
});

export { getAllCameras, getCameraById, addCamera };
