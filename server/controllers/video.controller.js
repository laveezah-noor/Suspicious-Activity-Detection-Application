import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Video from "../models/video.model.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import extractImage from "../utils/extractImage.js";

const getAllVideos = asyncHandler(async (req, res) => {
    const videos = await Video.find()

    return res
    .status(200)
    .json(new ApiResponse(200, videos, "Videos fetched Successfully"));
});

const getVideoById = asyncHandler(async (req, res) => {
  const { videoId } = req.body;
  const video = await Video.findById(videoId)

  if(!video) throw new ApiError(409, "No video by this id");
    return res
    .status(200)
    .json(new ApiResponse(200, video, "Video fetched Successfully"));
});

const uploadVideo = asyncHandler(async (req, res) => {
  const { cameraID } = req.body || req.params;
  const videoLocalPath = req.file?.path;
  if (!videoLocalPath) throw new ApiError(400, "No Video file Uploaded");
//   const thumbnail = extractImage(videoLocalPath, '00:00:10')  
//   console.log("Image: ",thumbnail)
  // Save the image to cloudinary and remove local copy
  const video = await uploadOnCloudinary(videoLocalPath);
  if (!video?.url)
    throw new ApiError(400, "Error while uploading video to Cloudinary");

  const result = await Video.create({
    videoURL: video.url,
    duration: video.duration
  })
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Video uploaded Successfully"));
});

export { getAllVideos, getVideoById, uploadVideo };
