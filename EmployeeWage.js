//UC 6 Store Daily Wage along with total wage 
const MAX_HRS_IN_MONTH=160;
const NUM_OF_WORKING_DAYS=20;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const WAGE_PER_HOUR=20;
let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyWageArr=new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
 
function calculateDailyWage(empHrs)
{
  return empHrs*WAGE_PER_HOUR;
}
 
function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
       case IS_PART_TIME:
            return 4;
       case IS_FULL_TIME:
            return 8;
       default:
            return 0;
   }
} 
while(totalEmpHrs <=MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
  totalWorkingDays++;
  let empCheck=Math.floor(Math.random()*10)%3;
  let empHrs=getWorkingHours(empCheck);
  totalEmpHrs+=empHrs;
  empDailyWageArr.push(calculateDailyWage(empHrs));
  empDailyHrsMap.set(totalWorkingDays,totalEmpHrs);
  empDailyWageMap.set(totalWorkingDays,calculateDailyWage(empHrs));
}
console.log(empDailyWageMap);

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
} 
console.log(Array.from(empDailyWageMap.values()).reduce(totalWages,0));

//UC 9 Use Arrow functions
const findTotal = (totalVal, dailyVal) => {return totalVal + dailyVal};
let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0); 
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal,0);
console.log("UC9A - Emp Wage with Arrow.: " + " Total Hours: " + totalHours + " Total Wages: " + totalSalary);
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach( (value, key, nap) => { 
     if (value == 8) fullWorkingDays.push(key);
     else if (value == 4) partWorkingDays.push(key); 
     else nonWorkingDays.push(key);
});
console.log("Full Working Days: "+fullWorkingDays); 
console.log("Part Working Days: "+partWorkingDays); 
console.log("Non Working Days: "+nonWorkingDays);

//UC10 Object Creation
let totalEmpHrsUC10 = 0;
let totalWorkingDaysUC10 = 0;
let empDailyHrsAndWageArr = new Array(); 
while (totalEmpHrsUC10 <= MAX_HRS_IN_MONTH && totalWorkingDaysUC10 < NUM_OF_WORKING_DAYS){
     totalWorkingDaysUC10++;
     let empCheck = Math.floor(Math.random() * 10) % 3;
     let empHrs = getWorkingHours(empCheck); totalEmpHrsUC10 += empHrs;
     empDailyHrsAndWageArr.push(
          { dayNum:totalWorkingDaysUC10, 
               dailyHours:empHrs,
                         dailyWage: calculateDailyWage(empHrs), 
                         toString(){
                         return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours + ' And Wage Earned = ' + this.dailyWage
                    },
               });
          }
      console.log("UC10 Showing Daily Hours Worked and wage earned: "+ empDailyHrsAndWageArr);    
 
// UC 10A to UC 11D Using Object Functions along with Arrow Functions 
let totalWagesUC11 = empDailyHrsAndWageArr
                    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                    .reduce((totalWageUC10, dailyHrsAndWage) => totalWageUC10 += dailyHrsAndWage.dailyWage, 0); 
let totalHoursUC11 = empDailyHrsAndWageArr
                    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                    .reduce((totalHoursUC11, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0); console.log("UC 11A Total Hours: " +totalHoursUC11+ " Total Wages: "+totalWagesUC11);

                    process.stdout.write("UC 11B Logging Full Work Days")
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8) 
                     .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));
let partWorkingDayStrArr = empDailyHrsAndWageArr
                              .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4) 
                              .map(dailyHrsAndWage => dailyHrsAndWage.toString()); 
console.log("\nUC 11C PartWorkingDayStrings: "+ partWorkingDayStrArr);

let nonWorkingDayNums = empDailyHrsAndWageArr
                         .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                         .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("UC 11D NonWorkingDayNums: "+nonWorkingDayNums);

//UC 12 Extend Employee payroll class
class EmployeePayrollData{
     id;
     salary;
     gender;
     startDate;

     constructor(...params) { 
          this.id = params[0];
          this.name = params[1];
          this.salary = params[2];
          this.gender = params[3];
          this.startDate = params[4];
     }
     get name() { return this._name;}
     set name(name) { this._name = name; }
     
     toString() {
          const options = {year: 'numeric',month: 'long',day: 'numeric'};
          const empDate = this.startDate === undefined ? "undefined" :
                          this.startDate.toLocaleDateString("en-US",options);
          return "id=" + this.id + ", name='" + this.name + ", salary=" + this.salary+
                    ", gender="+this.gender+ ", startDate="+ empDate;
          }
     }
     let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000); 
     console.log(employeePayrollData.toString()); 
     employeePayrollData.name = "john";
     console.log(employeePayrollData.toString());
     let newEmployeePayrollData = new EmployeePayrollData(1,"Terrisa",30000,"F", new Date());
     console.log(newEmployeePayrollData.toString());
     