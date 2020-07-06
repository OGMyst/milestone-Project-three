document.addEventListener("DOMContentLoaded", function() { 
    daysOfTheWeek();
    showCalendar(month, year)
});

const DAYS_IN_DATE_FORMAT = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09",
                             "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
                             "20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
                             "30", "31"]
const MONTHS_IN_DATE_FORMAT = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12",]    
const MONTHNAMES = ["January", "February", "March", "April",
                  "May", "June", "July", "August", "September",
                  "October", "November", "Decemeber"];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();
let weekDays;

function calendarMonthAndYear(){ 
    currentMonth = MONTHNAMES[month];
    document.getElementById("month").innerHTML = "<h1>" + currentMonth + "</h1>";
    document.getElementById("year").innerHTML = "<h4>" + year + "</h4>";    
};

function daysOfTheWeek(){    
    for(i = 0; i < 7; i++){
        weekDays = DAYS[i];
        document.getElementById("day-labels").innerHTML += "<div class='week-days flex-center'>" + weekDays + "</div>"
    }
};

function showCalendar(month, year) {

    calendarMonthAndYear();

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let tbl = document.getElementById("calendar-days");
    // clearing all previous cells
    tbl.innerHTML = "";
    // creating all cells
    let date = 1;
    for (let i = 0; i < 5; i++) {
        let row = document.createElement("tr");
        row.classList.add("calendar-row");

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
                let div = document.createElement("div");
                let pTag = document.createElement("p")
                
                let cellText = date;
                cell.classList.add("calendar-cell");
                
                div.classList.add("calendar-cell-div")
                cell.append(div);
                div.append(pTag);
                pTag.append(cellText);
                pTag.classList.add("date-text");
                row.appendChild(cell);
                date++;
            }
        }
        tbl.appendChild(row); // appending each row into calendar body.
        
    }
    insertImagesToCalendar();
}

function nextmonth() {
    year = (month === 11) ? year + 1 : year;
    month = (month + 1) % 12;
    showCalendar(month, year);
}

function previousmonth() {
    year = (month === 0) ? year - 1 : year;
    month = (month === 0) ? 11 : month - 1;
    showCalendar(month, year);
}

function nextyear() {
    year =  year + 1  
    showCalendar(month, year);
}

function previousyear() {
    year =  year - 1
    showCalendar(month, year);
}
function insertImagesToCalendar(){
    let numberOfDaysInMonth = document.getElementsByClassName("date-text");
    let eachOccupiedCell = document.getElementsByClassName("calendar-cell-div");
    let formatedMonth = MONTHS_IN_DATE_FORMAT[month]
    let releaseDatesClass = document.getElementsByClassName("dates-for-calendar");
    let filmPosters = document.getElementsByClassName("posters-for-calendar");
    
    let allDaysInMonth = [];
    let releaseDates = [];

    for(i = 1; i <= numberOfDaysInMonth.length; i++){
        eachDate = DAYS_IN_DATE_FORMAT[i] + "/" + formatedMonth + "/" + year; 
        allDaysInMonth.push(eachDate);
    }

    for(i = 0; i < releaseDatesClass.length; i++){
        releaseDates.push(releaseDatesClass[i].innerHTML);
        
    }
    
    for(i = 0; i < releaseDates.length; i++){
        for(j = 1; j <= allDaysInMonth.length; j++){
            
            if(releaseDates[i] === allDaysInMonth[j]){
                let image = document.createElement("img")
                let div = eachOccupiedCell[j];  

                image.classList.add("calendar-image", "grow")
                image.src = filmPosters[i].innerHTML;
                div.append(image);                
            }
        }
    }
    
}