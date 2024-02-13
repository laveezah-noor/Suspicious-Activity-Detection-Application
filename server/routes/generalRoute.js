const express = require( 'express' );
require('dotenv').config();

const router = express.Router();
/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get( '/', function ( req, res ) {
    return res.status(200).send("Hello World")
})

router.post("/login", (req,res) => {
const username = req.query.username;
const password = req.query.password;

if (!username || !password) {
    return res.status(404).json({message: "Error logging in"});
}

if (authenticatedUser(username,password)) {
    let accessToken = jwt.sign({
    data: password
    }, 'access', { expiresIn: 60 * 60 });

    req.session.authorization = {
    accessToken,username
}
return res.status(200).send("User successfully logged in");
} else {
    return res.status(208).json({message: "Invalid Login. Check username and password"});
}
});

router.post("/register", (req,res) => {
const username = req.query.username;
const password = req.query.password;

if (username && password) {
    if (!doesExist(username)) { 
    users.push({"username":username,"password":password});
    return res.status(200).json({message: "User successfully registred. Now you can login"});
    } else {
    return res.status(404).json({message: "User already exists!"});    
    }
} 
return res.status(404).json({message: "Unable to register user."});
});

router.get("/auth/get_message", (req,res) => {
return res.status(200).json({message: "Hello, You are an authenticated user. Congratulations!"});
})


module.exports.general = router;