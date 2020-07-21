let films = [];

document.addEventListener("DOMContentLoaded", function() { 
    $.ajax({
        url: '/api/get-films',
        success: function(data) {
            films = JSON.parse(data)
            daysOfTheWeek();
            showCalendar(month, year, films);  
        }
    });
    
});

const DAYS_IN_DATE_FORMAT = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09",
                             "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
                             "20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
                             "30", "31"];
const MONTHS_IN_DATE_FORMAT = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12",]; 
const MONTHNAMES = ["January", "February", "March", "April",
                  "May", "June", "July", "August", "September",
                  "October", "November", "Decemeber"];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();
let weekDays;
let date = 1;

function calendarMonthAndYear(){ 
    currentMonth = MONTHNAMES[month];
    document.getElementById("month").innerHTML = "<h1>" + currentMonth + "</h1>";
    document.getElementById("year").innerHTML = "<h4>" + year + "</h4>";   
}

function daysOfTheWeek(){    
    for(i = 0; i < 7; i++){
        weekDays = DAYS[i];
        document.getElementById("day-labels").innerHTML += "<div class='week-days flex-center'>" + weekDays + "</div>";
    }
}

function showCalendar(month, year, films) {

    calendarMonthAndYear();
    let numberOfDaysInWeek = 7;
    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let row_count = Math.ceil((daysInMonth+firstDay) /numberOfDaysInWeek);
    let calendarTable = document.getElementById("calendar-days");
     
    // clearing all previous cells
    calendarTable.innerHTML = "";
    // creating all cells
    
    for (let i = 0; i < row_count; i++) {
        let row = document.createElement("tr");
        row.classList.add("calendar-row");

        for (let j = 1; j < 8; j++) {
            let endofRow = j % 7;
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.classList.add("calendar-cell");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;

            }else {
                createFilledCell(date, row, row_count, i, endofRow);
                date++;
                
            }
            
        }
        calendarTable.appendChild(row); // appending each row into calendar body.
    }
    insertImagesToCalendar(films, daysInMonth, month);
    date = 1;
}

function createFilledCell(date, row, row_count, i, endofRow){
    let cell = document.createElement("td");
    let div = document.createElement("div");
    let dateTag = document.createElement("a");
    let pTag = document.createElement("p");
    let cellText = date;
    if(i === (row_count - 1)){
        cell.classList.add("bottom-row-cell");
    }

    if(endofRow === 0){
        cell.classList.add("end-row-cell");
    }

    cell.classList.add("calendar-cell");               
    div.classList.add("calendar-cell-div");
    cell.append(div);
    div.append(dateTag);
    dateTag.append(pTag);
    pTag.append(cellText);
    pTag.classList.add("date-text");
    row.appendChild(cell);
}

function nextmonth() {
    year = (month === 11) ? year + 1 : year;
    month = (month + 1) % 12;
    $.ajax({
        url: '/api/get-films',
        success: function(data) {
            films = JSON.parse(data)
        showCalendar(month, year);
        }
    });
}

function previousmonth() {
    year = (month === 0) ? year - 1 : year;
    month = (month === 0) ? 11 : month - 1;
    $.ajax({
        url: '/api/get-films',
        success: function(data) {
            films = JSON.parse(data)
        showCalendar(month, year);
        }
    });
}

function nextyear() {
    year =  year + 1;  
    $.ajax({
        url: '/api/get-films',
        success: function(data) {
            films = JSON.parse(data)
        showCalendar(month, year);
        }
    });
}

function previousyear() {
    year =  year - 1;
    $.ajax({
        url: '/api/get-films',
        success: function(data) {
            films = JSON.parse(data)
        showCalendar(month, year);
        }
    });
}

function insertImagesToCalendar(films, daysInMonth, month){
    for(x = 0; x < films.length; x++){
        let filmsReleaseDate = films[x].release_date;
        let filmReleaseMonth = filmsReleaseDate.slice(3,5).replace("0","");
        if((filmReleaseMonth-1) === month){
            let eachOccupiedCell = document.getElementsByClassName("calendar-cell-div");
            let formatedMonth = MONTHS_IN_DATE_FORMAT[month];    
            let allDaysInMonth = [];
            let dateUrl = (`/date_of_film/${films[x].release_date}`);

            for(i = 1; i <= daysInMonth; i++){
                eachDate = DAYS_IN_DATE_FORMAT[i] + "/" + formatedMonth + "/" + year; 
                allDaysInMonth.push(eachDate);
            }
            for(j = 1; j <= allDaysInMonth.length; j++){
                if(films[x].release_date === allDaysInMonth[j]){ 
                    let image = document.createElement("img"); 
                    let div = eachOccupiedCell[j]; 
                    let imageLimit =  $(div).children();
                    let datePage = $(eachOccupiedCell[j]).find("a");
                        
                        
                    image.setAttribute("onclick",`viewMoreModal('/edit_film/${films[x]._id}', '/delete_film/${films[x]._id}', '${films[x].theatrical_poster_url}', '${films[x].producer}', '${films[x].director}', '${films[x].duration}', '${films[x].film_name}', '${films[x].genre}', '${films[x].release_date}', '${films[x].screenplay}', '${films[x].story}', '${films[x].starring}', "${films[x].plot_summary}")`);
                    image.setAttribute("alt", `${films[x].film_name}`);
                    image.classList.add("calendar-image", "grow");
                    image.src = films[x].theatrical_poster_url;
                    datePage[0].href = dateUrl;
                        

                    if(imageLimit.length < 3){
                        div.append(image);
                    }else{
                        image.classList.add("hidden");
                        div.append(image); 
                    }            
                } 
            }
        }
    }
}