import express from 'express';
import { upload } from '../middlewares/multer.middleware.js';
import { registerUser, loginUser, logoutUser } from '../controllers/user.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

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
userRouter.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }, 
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)

// POST /users: Login user
userRouter.route("/login").post(
    loginUser
)

// POST /users: Logout user
userRouter.route("/logout").post(
    verifyJWT,
    logoutUser
)

// GET /users/{UserID}: Retrieve a specific user by UserID
userRouter.get('/:userid', ( req, res ) => {})

// PUT /users/{UserID}: Update a specific user by UserID
userRouter.put('/:userid', ( req, res ) => {})

// DELETE /users/{UserID}: Delete a specific user by UserID
userRouter.delete('/:userid', ( req, res ) => {})

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Registers a new user with the given username and password. If successful, returns a JWT token to authenticate future requests.
 * /users/login:
 *   post:
 *     summary: Authenticate an existing user and return JWT token
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *      200:
 *        description: Successful authentication
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: "Authentication successful"
 *                jwtToken:
 *                  type: string
 */
export default userRouter;