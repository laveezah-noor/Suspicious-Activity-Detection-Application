import express from 'express' ;
import { upload } from '../middlewares/multer.middleware.js';

import {getAllAlerts, getAlertById, createAlertWithUploadVideo} from "../controllers/alert.controller.js"
import { verifyJWT } from '../middlewares/auth.middleware.js';

const alertRouter = express.Router();

// GET /alerts: Retrieve all alerts
alertRouter.get('/', getAllAlerts)

// POST /alerts: Create a new alert
// alertRouter.route('/').post(verifyJWT, createAlert)

alertRouter.route('/').post(verifyJWT ,upload.single("video"), createAlertWithUploadVideo)

// GET /alerts/{AlertID}: Retrieve a specific alert by alertID
alertRouter.get('/:alertid', getAlertById)

// PUT /alerts/{AlertID}: Update a specific alert by alertID
alertRouter.put('/:alertid', ( req, res ) => {})

// DELETE /alerts/{AlertID}: Delete a specific alert by alertID
alertRouter.delete('/:alertid', ( req, res ) => {})

export default alertRouter;