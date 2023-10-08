const mongoose = require("mongoose")

const sencondYearSchema = new mongoose.Schema({
    year:{
        type:Number,
        required:true,
    },
    link:{
        type:String,
        required:true,
    },
    branch:{
        type:String,
    },
    sub:{
        type:String,
        required:true,
        unique:true
    }
})

module.exports = mongoose.model('secondYearPapers', sencondYearSchema)