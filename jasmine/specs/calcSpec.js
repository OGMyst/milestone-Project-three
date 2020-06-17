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
});