import { verifyJWT } from "../middlewares/auth.middleware.js";
import express from 'express';
const cameraRouter = express.Router();
import { upload } from '../middlewares/multer.middleware.js';
import {getAllCameras, addCamera, getCameraById} from "../controllers/camera.controller.js"

// GET /cameras: Retrieve all cameras
cameraRouter.get('/', getAllCameras)

// POST /cameras: Create a new camera
cameraRouter.route('/').post( verifyJWT, upload.single("image"), addCamera)

// GET /cameras/{cameraID}: Retrieve a specific camera by cameraID
cameraRouter.get('/:cameraid', getCameraById)

// PUT /cameras/{cameraID}: Update a specific camera by cameraID
cameraRouter.put('/:cameraid', ( req, res ) => {})

// DELETE /cameras/{cameraID}: Delete a specific camera by cameraID
cameraRouter.delete('/:cameraid', ( req, res ) => {})

export default cameraRouter;