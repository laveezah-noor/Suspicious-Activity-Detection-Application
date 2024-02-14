import express from  'express' ;
// require('dotenv'.config({path: "./env"});
import dotenv from "dotenv";
import session from "express-session";
import cors from "cors";
import cookieParser from 'cookie-parser';
import router from "./routes/generalRoute.js";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import connectDB from  './db/index.js';
import userRouter from "./routes/userRoute.js";
import videoRouter from './routes/videoRoute.js';
import cameraRouter from './routes/cameraRoute.js';
import alertRouter from './routes/alertRoute.js';

dotenv.config({
  path: './.env'
})
const app = new express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SAD',
      summary: "Suspicious Activity Detection Application",
      version: '1.0.0',
      description: "Backend Server to serve APIs for a Suspicious Activity Detection Application",
      "termsOfService": "https://example.com/terms/",
      "contact": {
        "name": "API Support",
        "url": "https://www.example.com/support",
        "email": "support@example.com"
      },
      "license": {
        "name": "Apache 2.0",
        "url": "https://www.apache.org/licenses/LICENSE-2.0.html"
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`
      }
    ]
  },
  apis: ["./routes/*.js"]
}

const specs = swaggerJSDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());
app.use(session({secret:"fingerpint"}))

app.use("/auth", function auth(req,res,next){
   if(req.session.authorization) { //get the authorization object stored in the session
       token = req.session.authorization['accessToken']; //retrieve the token from authorization object
       jwt.verify(token, "access",(err,user)=>{ //Use JWT to verify token
           if(!err){
               req.user = user;
               next();
           }
           else{
               return res.status(403).json({message: "User not authenticated"})
           }
        });
    } else {
        return res.status(403).json({message: "User not logged in"})
    }
});
// Error Handling
app.use("/user/:id",function (req, res, next) {
    if(req.params.id == 1) {
        throw new Error("Trying to access admin login")
    } else{
        next();
    }
})

// app.use(function (err,req, res, next) {
//     if(err != null) {
//         res.status(500).send(err.toString())
//     } else{
//         next();
//     }
// })


// // Router Middelware
app.use("/api/v1/users", userRouter)
app.use("/api/v1/videos", videoRouter)
app.use("/api/v1/alerts", alertRouter)
app.use("/api/v1/cameras", cameraRouter)

// //Function to check if the user is authenticated

// const authenticatedUser = (username,password)=>{
//     let validusers = users.filter((user)=>{
//       return (user.username === username && user.password === password)
//     });
//     if(validusers.length > 0){
//       return true;
//     } else {
//       return false;
//     }
//   }
  

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Listening at http://localhost:${process.env.PORT}`)
})