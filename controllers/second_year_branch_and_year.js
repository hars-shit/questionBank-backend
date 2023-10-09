const secondModel = require("../modal/second.model")

exports.second_year_find=async(req,res)=>{
    try{
        const {year,branch}=req.params;
        let data=await secondModel.find({year,branch})
        // console.log(data)
        res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}