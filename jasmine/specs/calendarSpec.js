describe("showCalender()", function(){

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
});