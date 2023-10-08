const express=require('express')
const cors=require('cors');
const  Connection  = require('./database/db');
const DefaultDataSecondYear = require('./defaults/secondYearDataPush');
const secondroute = require("./routes/route");
const DefaultDataThirdYear = require('./defaults/thirdYearDataPush');
const DefaultDataFourthYear = require('./defaults/fourthYearDataPush');
require('dotenv').config();

const app=express();
Connection();
// DefaultDataSecondYear();
// DefaultDataThirdYear();
// DefaultDataFourthYear()


// route 

app.use('/',secondroute)


const PORT= process.env.PORT || 9000;
app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})