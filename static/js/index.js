document.addEventListener("DOMContentLoaded", function() { 
    calendarMonth();
    daysOfTheWeek();
});

function calendarMonth(){
    let today = new Date();
    let month = today.getMonth();
    let monthNames = ["January", "February", "March", "April",
                    "May", "June", "July", "August", "September",
                    "Octboer", "November", "Decemeber"];
    currentMonth = monthNames[month];
    document.getElementById("month").innerHTML = "<h1>" + currentMonth + "</h1>";
};

function daysOfTheWeek(){
     let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    let weekDays;
    for(i = 0; i < 7; i++){
        weekDays = days[i];
        document.getElementById("day-labels").innerHTML += "<div class='week-days'>" + weekDays + "</div>"
    }
};