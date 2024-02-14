import express from ( 'express' );

const alertRouter = express.Router();

// GET /alerts: Retrieve all alerts
alertRouter.get('/', ( req, res ) => {})

// POST /alerts: Create a new alert
alertRouter.post('/', (req, res)=>{})

// GET /alerts/{AlertID}: Retrieve a specific alert by alertID
alertRouter.get('/:alertid', ( req, res ) => {})

// PUT /alerts/{AlertID}: Update a specific alert by alertID
alertRouter.put('/:alertid', ( req, res ) => {})

// DELETE /alerts/{AlertID}: Delete a specific alert by alertID
alertRouter.delete('/:alertid', ( req, res ) => {})

export default alertRouter;