const { FourthYearCe, FourthYearCse, FourthYearEe, FourthYearMe } = require("../constants/fourthYearData");
const fourth = require("../modal/fourthYear");

const DefaultDataFourthYear=async()=>{
    const merged_data_third_year=[...FourthYearCe,...FourthYearCse,...FourthYearEe,...FourthYearMe];
    try{
        await fourth.insertMany(merged_data_third_year);
        console.log('data is imported')
    }
    catch(error){
        console.log(error.message)
    }
}
module.exports=DefaultDataFourthYear