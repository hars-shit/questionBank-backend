const mongoose = require("mongoose")

const sencondYearSchema = new mongoose.Schema({
    year:{
        type:Number,
    },
    link:{
        type:String,  
    },
    branch:{
        type:String,
    },
    sub:{
        type:String,
        unique:true
    }
})

module.exports = mongoose.model('secondYearPapers', sencondYearSchema)