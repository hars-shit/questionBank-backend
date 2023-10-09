const express=require('express');
const { second_year_find } = require('../controllers/second_year_branch_and_year');
const { third_year_find } = require('../controllers/thirdYear_branch_and_year');
const { fourth_year_find } = require('../controllers/fourth_year_branch_and_year');

const routeForFind=express.Router();

routeForFind.get('/second/:year/:branch',second_year_find)

routeForFind.get('/third/:year/:branch',third_year_find)

routeForFind.get('/fourth/:year/:branch',fourth_year_find)

module.exports=routeForFind