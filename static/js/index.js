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
let date = 1;

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
    let numberOfDaysInWeek = 7;
    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let row_count = Math.ceil((daysInMonth+firstDay) /numberOfDaysInWeek);
    let tbl = document.getElementById("calendar-days");
     
    // clearing all previous cells
    tbl.innerHTML = "";
    // creating all cells
    
    for (let i = 0; i < row_count; i++) {
        let row = document.createElement("tr");
        row.classList.add("calendar-row");

        for (let j = 1; j < 8; j++) {
            let endofRow = j % 7
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.classList.add("calendar-cell")
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
        tbl.appendChild(row); // appending each row into calendar body.
    }
    getFilmData(daysInMonth);
    date = 1;
}

function createFilledCell(date, row, row_count, i, endofRow){
    let cell = document.createElement("td");
    let div = document.createElement("div");
    let pTag = document.createElement("p")
    let cellText = date;
    if(i === (row_count - 1)){
        cell.classList.add("bottom-row-cell")
    }

    if(endofRow === 0){
        cell.classList.add("end-row-cell")
    }
    cell.classList.add("calendar-cell");               
    div.classList.add("calendar-cell-div")
    cell.append(div);
    div.append(pTag);
    pTag.append(cellText);
    pTag.classList.add("date-text");
    row.appendChild(cell);
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

function insertImagesToCalendar(edit_film, delete_film, film_poster, producer, director, duration, film_name, genre, release_date, screenplay, story, starring, plot_summary, daysInMonth){
    let eachOccupiedCell = document.getElementsByClassName("calendar-cell-div");
    let formatedMonth = MONTHS_IN_DATE_FORMAT[month]    
    let allDaysInMonth = [];

    for(i = 1; i <= daysInMonth; i++){
        eachDate = DAYS_IN_DATE_FORMAT[i] + "/" + formatedMonth + "/" + year; 
        allDaysInMonth.push(eachDate);
    }

    for(j = 1; j <= allDaysInMonth.length; j++){
            
        if(release_date === allDaysInMonth[j]){ 
            let image = document.createElement("img"); 
            let div = eachOccupiedCell[j]; 
            let imageLimit =  $(div).children();
            
            image.setAttribute("onclick",`viewMoreModal('${edit_film}', '${delete_film}', '${film_poster}', '${producer}', '${director}', '${duration}', '${film_name}', '${genre}', '${release_date}', '${screenplay}', '${story}', '${starring}', "${plot_summary}")`);
            image.setAttribute("alt", `${film_name}`)
            image.classList.add("calendar-image", "grow")
            image.src = film_poster;
             
            if(imageLimit.length < 3){
                div.append(image);
            }else{
                image.classList.add("hidden");
                div.append(image); 
            }            
        } 
    }
}

function getFilmData(daysInMonth){
    let filmData = document.getElementsByClassName("film-data")
    for(x=0; x < filmData.length; x++){
        let findIndividualInfo = $(filmData[x]).children()
        let edit_film = findIndividualInfo[0].innerHTML;
        let delete_film = findIndividualInfo[1].innerHTML;
        let film_poster = findIndividualInfo[2].innerHTML;
        let producer = findIndividualInfo[3].innerHTML;
        let director = findIndividualInfo[4].innerHTML;
        let duration = findIndividualInfo[5].innerHTML;
        let film_name = findIndividualInfo[6].innerHTML;
        let genre = findIndividualInfo[7].innerHTML;
        let release_date = findIndividualInfo[8].innerHTML;
        let screenplay = findIndividualInfo[9].innerHTML;
        let story = findIndividualInfo[10].innerHTML;
        let starring = findIndividualInfo[11].innerHTML;
        let plot_summary = findIndividualInfo[12].innerHTML;
        insertImagesToCalendar(edit_film, delete_film, film_poster, producer, director, duration, film_name, genre, release_date, screenplay, story, starring, plot_summary, daysInMonth)
        
    }
    
}