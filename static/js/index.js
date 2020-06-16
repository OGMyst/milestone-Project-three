document.addEventListener("DOMContentLoaded", function() { 
    calendarMonth();
    daysOfTheWeek();
});

function calendarMonth(){
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    showCalendar(month, year);
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

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    console.log(daysInMonth)
}