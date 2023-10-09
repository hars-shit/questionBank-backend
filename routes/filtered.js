const express=require('express');
const { second_year_find } = require('../controllers/second_year_branch_and_year');
const { third_year_find } = require('../controllers/thirdYear_branch_and_year');
const { fourth_year_find } = require('../controllers/fourth_year_branch_and_year');

const routeForFind=express.Router();

routeForFind.get('/:year_second/:branch_second',second_year_find)

routeForFind.get('/:year_third/:branch_third',third_year_find)

routeForFind.get('/:year_fourth/:branch_fourth',fourth_year_find)

module.exports=routeForFind