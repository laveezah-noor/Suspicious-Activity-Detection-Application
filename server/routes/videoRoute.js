import express from 'express';
import { upload } from '../middlewares/multer.middleware.js';
import {getAllVideos, uploadVideo, getVideoById} from "../controllers/video.controller.js"

const videoRouter = express.Router();

videoRouter.route("/").get(getAllVideos)

videoRouter.route("/:id").get(getVideoById)

videoRouter.route("/").post(upload.single("video"), uploadVideo)

videoRouter.put("/:id",(req,res)=>{

})

export default videoRouter;