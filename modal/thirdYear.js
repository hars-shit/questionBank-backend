const mongoose=require('mongoose')

const thirdYearSchema=mongoose.Schema({
    sub:{
        type:String,
        // required:true,
        unique:true,
    },
    link:{
        type:String,
        // required:true
    },
    year:{
        type:Number,
        // required:true,
    },
    branch:{
        type:String,
    },
})

module.exports=mongoose.model('thirdYearPapers',thirdYearSchema);
