const express=require('express');
const { second_year_controller } = require('../controllers/secondYear');
const { third_year_controller } = require('../controllers/thirdYear');
const { fourth_year_controller } = require('../controllers/fourthYear');


const route=express.Router();

route.get('/secondYear',second_year_controller)

route.get('/thirdYear',third_year_controller)

route.get('/fourthYear',fourth_year_controller)


module.exports=route