console.log("Happy Birthday Maheen");
function countdown() {
    let now = new Date();
    let given = new Date("11-23-1999 08:00:00");
    let bYear = given.getFullYear();
    let bMonth = given.getMonth()+1;
    let bDate = given.getDate(); 
    let bHour = given.getHours();
    let bMinute = given.getMinutes();
    let bSecond = given.getSeconds();
    
    let nowYear = now.getFullYear();
    let nowMonth = now.getMonth()+1;
    let nowDate = now.getDate(); 
    let nowHour = now.getHours();
    let nowMinute = now.getMinutes();
    let nowSecond = now.getSeconds();
    
    // finding years 
    let years = nowYear - bYear;
    // console.log(years);

    // finding months
    let months;
    if (nowMonth >= bMonth) {
        months = nowMonth - bMonth;
    } else {
        months = 12 + nowMonth - bMonth;
        years = years - 1;
    }
    // console.log(years, months);
    
    // finding days
    let days;
    if (nowDate >= bDate) {
        days = nowDate - bDate;
    } else {
        days = 31 + nowDate - bDate;
        months = months - 1;
        if (months < 0) {
            months = 11;
            years = years - 1;
        }
    }
    // console.log(years, months, days);

    // finding hours
    let hours;
    if (nowHour >= bHour) {
        hours = nowHour - bHour;
    } else {
        hours = 24 + nowHour - bHour;
        days = days - 1;
        if (days < 0) {
            days = 30;
            months = months - 1;
            if (months < 0) {
                months = 11;
                years = years - 1;
            }
        }
    }
    // console.log(years, months, days, hours);

    // finding minutes
    let minutes;
    if (nowMinute >= bMinute) {
        minutes = nowMinute - bMinute;
    } else {
        minutes = 60 + nowMinute - bMinute;
        hours = hours - 1;
        if (hours < 0) {
            hours = 23;
            days = days - 1;
            if (days < 0) {
                days = 30;
                months = months - 1;
                if (months < 0) {
                    months = 11;
                    years = years - 1;
                }
            }
        }
    }
    // console.log(years, months, days, hours, minutes);

    // findind seconds
    let seconds;
    if (nowSecond >= bSecond) {
        seconds = nowSecond - bSecond;
    } else {
        seconds = 60 + nowSecond - bSecond;
        minutes = minutes - 1;
        if (minutes < 0) {
            minutes = 59;
            hours = hours - 1;
            if (hours < 0) {
                hours = 23;
                days = days - 1;
                if (days < 0) {
                    days = 30;
                    months = months - 1;
                    if (months < 0) {
                        months = 11;
                        years = years - 1;
                    }
                }
            }
        }
    }
    // console.log(years, months, days, hours, minutes, seconds);

    // updating the dom
    let domYears = document.getElementById('domYears');
    domYears.innerText = years;
    let domMonths = document.getElementById('domMonths');
    domMonths.innerText = months;
    let domDays = document.getElementById('domDays');
    domDays.innerText = days;
    let domHours = document.getElementById('domHours');
    domHours.innerText = hours;
    let domMinutes = document.getElementById('domMinutes');
    domMinutes.innerText = minutes;
    let domSeconds = document.getElementById('domSeconds');
    domSeconds.innerText = seconds;
}

setInterval(() => {
    countdown();
    
}, 1000);