import express from ('express');
// const { nanoid } = require("nanoid");
const cameraRouter = express.Router();

const idlength = 8;

cameraRouter.get("/",(req,res)=>{
    res.send("Information about item "+req.params.id)
})

cameraRouter.get("/:id",(req,res)=>{
    res.send("Details about item "+req.params.id)
})

cameraRouter.post("/",(req, res)=>{
    try {
        const item = {
            // id: nanoid(idlength)
        }
    } catch (error) {
        
    }
})

cameraRouter.put("/:id",(req,res)=>{

})

export default cameraRouter;