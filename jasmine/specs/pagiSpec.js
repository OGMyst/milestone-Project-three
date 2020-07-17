describe("Pagination", function(){

    let current_page = 1;
    let filmPerPage = 6;
    let numberOfFilms = 200

    it("should give 0 and 6", function(){
        current_page--;
	    let start = filmPerPage * current_page;
        let end = start + filmPerPage;
        expect(start).toBe(0);
        expect(end).toBe(6);
    });

    it("should give 34", function(){        
        let page_count = Math.ceil(numberOfFilms /filmPerPage);
        expect(page_count).toBe(34);
    });
});