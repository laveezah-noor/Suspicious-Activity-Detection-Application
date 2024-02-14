import ApiError  from '../utils/ApiError.js'
import ApiResponse from "../utils/ApiResponse.js"
import User from "../models/user.model.js"
import {asyncHandler} from "../utils/AsyncHandler.js"

const registerUser = asyncHandler(async (req, res)=>{
    // get user details
    const {displayName, email, username, password, phone} = req.body;
    // validation - not empty
    if (
        [displayName, email, username, password].some(field => field?.trim() === "" || field?.trim() === undefined)
      ) {
        throw new ApiError(400,  "All fields must be filled out");
      }
    //  check if user already exists: by username, email
    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })
    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists")
    }
    //console.log(req.files);

    // create user object in db
    const user = await User.create({
        displayName,
        email, 
        password,
        username: username.toLowerCase(),
        phone
    })

    // gets the user data without password and refresh Token from database
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    // check for user creation
    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    // return response
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )
})

export { 
    registerUser,
}