const express = require( 'express' );
require('dotenv').config();

const userRouter = express.Router();

userRouter.get("/about/:id",(req,res)=>{
    res.send("Response about user "+req.params.id)
})

userRouter.get("/details/:id",(req,res)=>{
    res.send("Details about user "+req.params.id)
})

// GET /users: Retrieve all users
userRouter.get('/', ( req, res ) => {})

// POST /users: Create a new user
userRouter.post('/', (req, res)=>{})

// GET /users/{UserID}: Retrieve a specific user by UserID
userRouter.get('/:userid', ( req, res ) => {})

// PUT /users/{UserID}: Update a specific user by UserID
userRouter.put('/:userid', ( req, res ) => {})

// DELETE /users/{UserID}: Delete a specific user by UserID
userRouter.delete('/:userid', ( req, res ) => {})


module.exports = userRouter;