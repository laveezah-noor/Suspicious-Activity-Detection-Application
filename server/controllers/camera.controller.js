import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Camera from "../models/camera.model.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

const getAllCameras = asyncHandler(async (req, res) => {
    const cameras = await Camera.find()

    return res
    .status(200)
    .json(new ApiResponse(200, cameras, "Cameras fetched Successfully"));
});

const getCameraById = asyncHandler(async (req, res) => {
  const { cameraId } = req.body || req.params;
  const camera = await Camera.findById(cameraId)
    if(!camera) throw new ApiError(409, "No camera by this id");
      
    return res
    .status(200)
    .json(new ApiResponse(200, camera, "camera fetched Successfully"));
});

const addCamera = asyncHandler(async (req, res) => {
    console.log(req.body)
    const { cameraName, location, status } = req.body;
    // validation - not empty
    if (!cameraName) {
      throw new ApiError(400, "Camera Name fields must be filled out");
    }
    var image;
    const imageLocalPath = req.file?.path;
    console.log(imageLocalPath)
      if (imageLocalPath) {
            image = await uploadOnCloudinary(imageLocalPath);
          // Save the image to cloudinary and remove local copy
          if (!image?.url)
              throw new ApiError(400, "Error while uploading image to Cloudinary");
      }
    const result = await Camera.create({
        cameraName,
        userId:req.user._id,
        location,
        status,
        lastConnection: new Date().getDate(),
        image: imageLocalPath? image?.url : null
    })
    return res
        .status(200)
        .json(new ApiResponse(200, result, "camera uploaded Successfully"));
});

export { getAllCameras, getCameraById, addCamera };
