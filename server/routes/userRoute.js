import express from 'express';
import { upload } from '../middlewares/multer.middleware.js';
import { registerUser, loginUser, logoutUser, refreshAccessToken, changeCurrentPassword, getCurrentUser, updateAccountDetails, updateUserAvatar} from '../controllers/user.controller.js';
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

// POST /users/register: Create a new user
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

// POST /users/login: Login user
userRouter.route("/login").post(
    loginUser
)

// POST /users/logout: Logout user
userRouter.route("/logout").post(
    verifyJWT,
    logoutUser
)

// POST /users/refresh-token: Refresh Token
userRouter.route("/refresh-token").post(refreshAccessToken)

// POST /users/change-password: Change Password
userRouter.route("/change-password").post(verifyJWT, changeCurrentPassword)

//  GET /users/current-user: Retrieve Current Loggedin User
userRouter.route("/current-user").get(verifyJWT, getCurrentUser)

// PATCH /users/update-account: Update Account Details
userRouter.route("/update-account").patch(verifyJWT, updateAccountDetails)

// PATCH /users/avatar: Update Avatar Image
userRouter.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar)


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