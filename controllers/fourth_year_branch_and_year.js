const fourth = require("../modal/fourthYear")

exports.fourth_year_find=async(req,res)=>{
    try{
        const{year,branch}=req.params;
        let data=await fourth.find({year,branch});
        res.status(200).json(data);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}