let filmCards = document.getElementsByClassName("film-card");
let filmContainer = document.getElementById("film-container");
let current_page = 1;
let filmPerPage = 5;
document.addEventListener("DOMContentLoaded", function() { 
    displayFilms (filmCards, filmContainer, filmPerPage, current_page);
    
});

function displayFilms (films, container, films_per_page, pageNumber) {
	pageNumber--;
	let start = films_per_page * pageNumber;
    let end = start + films_per_page;
    
	for (let i = start; i < end; i++) {
		$(films[i]).removeClass("hidden")
	}
};
