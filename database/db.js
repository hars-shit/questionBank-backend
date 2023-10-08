const mongoose=require('mongoose')

const Connection=async()=>{
    const URL=process.env.URI
    
    try{
        await mongoose.connect(URL,{
           useNewUrlParser:true
        })
        console.log("Databse connected successfully")
    }
    catch(error){
        console.log('error in db',error)
    }
}
module.exports=Connection;
