const mongoose = require("mongoose");

const fourthYear = mongoose.Schema({
  sub: {
    type: String,

    unique: true,
  },
  link: {
    type: String,

    unique: true,
  },
  year: {
    type: Number,
  },
  branch:{
    type:String,
  }
});

const fourth = mongoose.model("fourthYearPapers", fourthYear);
module.exports = fourth;
