const secondModel = require("../modal/second.model");

exports.second_year_controller=async(req,res)=>{
    try{
        let data=await secondModel.find({});
        console.log('data',data)
        res.status(200).json(data)
      
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}