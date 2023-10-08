const { ThirdYearCe, ThirdYearMe, ThirdYearCse, ThirdYearEe } = require("../constants/thirdYearData");
const thirdYear = require("../modal/thirdYear");

const DefaultDataThirdYear=async()=>{
    const merged_data_third_year=[...ThirdYearCe,...ThirdYearMe,...ThirdYearCse,...ThirdYearEe];

    try{
        // await thirdYear.deleteMany({})
        await thirdYear.insertMany(merged_data_third_year)
        console.log('data is imported')
    }
    catch(error){
        console.log(error.message)
    }
}
module.exports=DefaultDataThirdYear