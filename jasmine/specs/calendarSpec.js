describe("Calendar", function(){

    let numberOfDaysInWeek;
    let firstDay;
    let daysInMonth;
    let row_count;
    let tbl;

    //firstDay = the day of the week on which the first day of the month falls
    it("should return 1", function(){
        let firstDay = (new Date(2020, 5)).getDay(); //Remember months are 0-11 so 5 == june
        expect(firstDay).toBe(1);
    });

    
    it("should return 30", function(){
        let daysInMonth = 32 - new Date(2020, 5, 32).getDate(); //Second half gives difference betweeen No.days in month and 32 
        expect(daysInMonth).toBe(30);
    });

    it("should return current month", function(){
        currentMonth = calendarMonthAndYear();
        expect(currentMonth).toBe("July");
    });

    it("should confirm that html has been added to #month/#year", function(){
        calendarMonthAndYear();
        let displayedMonth = document.getElementById("month").innerHTML
        let displayedYear = document.getElementById("year").innerHTML
        expect(displayedMonth).toBe("<h1>July</h1>");
        expect(displayedYear).toBe("<h4>2020</h4>");
    });

    it("should give days of the week", function(){
        daysOfTheWeek();
        let numberOfDays = document.getElementById("day-labels").childNodes
        expect(numberOfDays.length).toBe(7);
    });

    it("should return 5", function(){
        let rows = showCalendar(6, 2020);
        expect(rows).toBe(5);
    });

    it("should return confirm message", function(){
        let confirmEnd;
        let row_count = 5
        let filledCell;
        for (let i = 0; i < row_count; i++) {
            if(i === (row_count - 1)){
                filledCell =  createFilledCell(confirmEnd)
            };
        }
        expect(filledCell).toBe("code runs for end of row");
    });

    beforeEach(() =>{
        numberOfDaysInWeek = 7;
        firstDay = (new Date(year, month)).getDay();
        daysInMonth = 32 - new Date(year, month, 32).getDate();
        row_count = Math.ceil((daysInMonth+firstDay) /numberOfDaysInWeek);
        tbl = document.getElementById("calendar-days");
    });

    it("should return 2", function(){
        let emptyCells = [];
        for (let i = 0; i < row_count; i++) {
            for (let j = 1; j < 8; j++) {
                if (i === 0 && j < firstDay) {
                    emptyCells.push(j)
                }
            }
        }
        expect(emptyCells.length).toBe(2);
    });

    it("should return message and check if statement is only triggering on last day", function(){
        let lastDay;
        let dayCounter = 0;
        for (let i = 0; i < row_count; i++) {
            for (let j = 1; j < 8; j++) {
                if (date > daysInMonth) {
                    lastDay = "Last day in month reached"
                }
                else{
                    dayCounter ++;
                }
                date++;
            }
        }
        expect(lastDay).toBe("Last day in month reached");
        expect(dayCounter).toEqual(daysInMonth);
    });
        
});