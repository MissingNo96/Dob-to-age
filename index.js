var main = (DOB , timezone = 'UTC') => {
    
    var date = new Date();

    var monthValidator = (month) => {
        var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var bool = months.includes(parseInt(month));
        return bool
    };

    var dateValidator = (date) => {
        var dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];        
        var bool = dates.includes(parseInt(date));
        return bool
    };    

    if(typeof DOB !== 'object') throw new Error(`The "DOB" parameter must be an valid JSON object!`);
    if(monthValidator(DOB.month) === false) throw new Error(`DOB.month must be a valid month number of range 1 to 12.`);
    if(dateValidator(DOB.date) === false) throw new Error(`DOB.date must be a valid date number of range 1 to 31.`);
    if(date.getFullYear() < DOB.year) throw new Error(`DOB.year cannot be greater than the current year.`);    
    
    var nowYear = date.getFullYear();
    var nowMonth = date.getMonth() + 1;
    var nowDate = date.getDate();

    var ageYear = nowYear - DOB.year;
    
    if(nowMonth == DOB.month){
        var ageMonth = 0
    } else if(nowMonth > DOB.month){
        var ageMonth = nowMonth - DOB.month        
    } else if(nowMonth < DOB.month){
        var ageMonth = (nowMonth + 12) - DOB.month
        ageYear = ageYear - 1
    }

    if(nowDate == DOB.date){
        var ageDay = 0
    } else if(nowDate > DOB.date){
        var ageDay = nowDate - DOB.date        
    } else if(nowDate < DOB.date){
        var ageDay = (nowDate + 28) - DOB.date        
    }    

    var age = {
        years: ageYear,
        months: ageMonth,
        days: ageDay
    };

    return age

};

var age = main({date: 16, month: 12, year: 2006}, 'UTC')
// Give an JSON object in the first agrument with "date", "month" and "year" of date of birth,
// and the function will return the age as an JSON object with "years", "months" and "days" of age.
console.log(age);
