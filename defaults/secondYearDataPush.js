const { SecondYearCe, SecondYearCse, SecondYearMe, SecondYearEe } = require("../constants/secondYearData")
const secondYearModel = require("../modal/second.model")

const DefaultDataSecondYear=async()=>{

        const merged_data_second_year=[...SecondYearCe,...SecondYearCse,...SecondYearMe,...SecondYearEe];
        try{
            // await secondYearModel.deleteMany({});
            await secondYearModel.insertMany(merged_data_second_year);
            console.log('data is imported')
            
        }
        catch(error){
            console.log(error.message)
        }
    }



module.exports=DefaultDataSecondYear