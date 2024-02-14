import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'

// cloudinary.config({ 
//   cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`, 
//   api_key: `${process.env.CLOUDINARY_API_KEY}`, 
//   api_secret: `${process.env.CLOUDINARY_API_SECRET}`,
//   secure: true, 
// });
cloudinary.config({
    cloud_name: 'daqqiu2ta',
    api_key: '489581722479689',
    api_secret: 'l9dpzXFcExcE7irUDdQe5oQmB7o',
    secure: true,
  });

const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if (!localFilePath) return null
        const result = await cloudinary.uploader
        .upload(localFilePath, {
            resource_type: "auto"
        })
        console.log(result)
        console.log("file is upload on cloudinary",result.url);
        fs.unlinkSync(localFilePath)
        return result
    }
    catch(err){
        fs.unlinkSync(localFilePath); // remove the locally save the temporary file as the upload operation got failed
        return null
    }
}

export default uploadOnCloudinary;
// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });