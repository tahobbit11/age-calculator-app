// I need a function that breaks down the day month and year
// I need a function that knows when the button is being clicked
// I need a function that allows the users inputs to be used for later functions
// I need a function to know when something invalid happens

//Input
const yearInput = document.getElementById("input-data-year");
const monthInput = document.getElementById("input-data-month");
const dayInput = document.getElementById("input-data-day");
//Output
const yearOutput = document.getElementById("output-data-years");
const monthOutput = document.getElementById("output-data-months");
const dayOutput = document.getElementById("output-data-days");
//button
const button = document.querySelector("button");
//Text
const nothingDay = document.getElementById("nothing-day");
const notValidDay = document.getElementById("not-valid-day");
const dateValid = document.getElementById("date-valid");
const nothingMonth = document.getElementById("nothing-month");
const notValidMonth =document.getElementById("not-valid-month");
const nothingYear = document.getElementById("nothing-year");
const notValidYear = document.getElementById("not-valid-year");

//Break up day, month, and year validations into their own functions
dayCheck = () => {
    let value = dayInput.value;
    if (value === ''){
        nothingDay.style.display = 'inline-block';
        dayInput.style.border = '1px solid hsl(0, 100%, 67%)';
        return false;
    } else if (value < 1 || value > 31) {
        notValidDay.style.display = 'inline-block'
        dayInput.style.border = '1px solid hsl(0, 100%, 67%)';
        return false
    } else if (value > 30 && (monthInput.value === 4 || monthInput.value === 6 || monthInput.value === 9 || monthInput == 11)){
        dayInput.style.border = '1px solid hsl(0, 100%, 67%)';
        dateValid.style.display = 'inline-block';
        return false;
    } else {
        return true;
    }
};

monthCheck = () => {
    let value = monthInput.value;
    if (value === ''){
        nothingMonth.style.display = 'inline-block';
        monthInput.style.border = '1px solid hsl(0, 100%, 67%)';
        return false
    }   else if (value < 1 || value > 12){
        notValidMonth.style.display = 'inline-block';
        monthInput.style.border = '1px solid hsl(0, 100%, 67%)';
        return false;
    }   else {
        return true;
    }
};

yearCheck = () => {
    let value = yearInput.value;
    let presentYear = new Date().getFullYear();
    if (value === ''){
        nothingYear.style.display ='inline-block';
        yearInput.style.border = '1px solid hsl(0, 100%, 67%)';
        return false;
    }   else if (value > presentYear){
        notValidYear.style.display = 'inline-block';
        yearInput.style.border = '1px solid hsl(0, 100%, 67%)';
        return false;
    }   else {
        return true;
    }
};
// Calculation
const calculation = (birth) => {
    let birthDate = new Date(birth);
    let todayDate = new Date();
    console.log(birth);

    let years = todayDate.getFullYear() - birthDate.getFullYear();
    let months = todayDate.getMonth() - birthDate.getMonth();
    let days = todayDate.getDate() - birthDate.getDate();
    console.log(years);
    console.log(months);
    console.log(days);
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        if(months === 0) {
            months = 11;
        } else {
            months = 12 + months;
        }
        days = 30 + days;
    }

    yearOutput.innerHTML = years;
    monthOutput.innerHTML = months;
    dayOutput.innerHTML = days;
};
//Button
button.addEventListener("click", function(e){
    e.preventDefault();

    if(e){
        nothingDay.style.display = 'none';
        nothingMonth.style.display = 'none';
        nothingYear.style.display = 'none';
        notValidDay.style.display = 'none';
        dateValid.style.display = 'none';
        dayInput.style.border = '1px solid hsl(0, 0%, 86%)';
        monthInput.style.border = '1px solid hsl(0, 0%, 86%)';
        yearInput.style.border = '1px solid hsl(0, 0%, 86%)';
    };
    
    let day = dayCheck();
    let month = monthCheck();
    let year = yearCheck();
    if (!day || !month || !year){
        return
    };
    let birth = `${monthInput.value}/${dayInput.value}/${yearInput.value}`;
    console.log(birth);
    calculation(birth);
});