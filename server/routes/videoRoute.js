const express = require('express');
// const { nanoid } = require("nanoid");
const videoRouter = express.Router();

const idlength = 8;

videoRouter.get("/",(req,res)=>{
    res.send("Information about item "+req.params.id)
})

videoRouter.get("/:id",(req,res)=>{
    res.send("Details about item "+req.params.id)
})

videoRouter.post("/",(req, res)=>{
    try {
        const item = {
            // id: nanoid(idlength)
        }
    } catch (error) {
        
    }
})

videoRouter.put("/:id",(req,res)=>{

})

module.exports = videoRouter;