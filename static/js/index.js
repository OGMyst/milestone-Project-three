document.addEventListener("DOMContentLoaded", function() { 
    calendarMonth();
    daysOfTheWeek();
    showCalendar(month, year)
});

let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();
let monthNames = ["January", "February", "March", "April",
                  "May", "June", "July", "August", "September",
                  "Octboer", "November", "Decemeber"];
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
let weekDays;

function calendarMonth(){ 
    currentMonth = monthNames[month];
    document.getElementById("month").innerHTML = "<h1>" + currentMonth + "</h1>";    
};

function daysOfTheWeek(){    
    for(i = 0; i < 7; i++){
        weekDays = days[i];
        document.getElementById("day-labels").innerHTML += "<div class='week-days'>" + weekDays + "</div>"
    }
};

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let tbl = document.getElementById("calendar-days");
    // clearing all previous cells
    tbl.innerHTML = "";
    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");

        for (let j = 1; j < 8; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.classList.add("calendar-cell")
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }
            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                cell.classList.add("calendar-cell")
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }
        tbl.appendChild(row); // appending each row into calendar body.
    }
}