const fourth = require("../modal/fourthYear");

exports.fourth_year_controller=async(req,res)=>{
    try{
        let data=await fourth.find({});
            console.log('data',data)
            res.status(200).json(data)
    }
    catch(error){
        console.log(error.message)
    }
}