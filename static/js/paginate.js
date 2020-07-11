let filmCards = document.getElementsByClassName("film-card");
// let filmContainer = document.getElementById("film-container");
let current_page = 1;
let filmPerPage = 5;
document.addEventListener("DOMContentLoaded", function() { 
    displayFilms (filmCards, filmPerPage, current_page);
    
});

function displayFilms (films, films_per_page, pageNumber) {
	pageNumber--;
	let start = films_per_page * pageNumber;
    let end = start + films_per_page;
    
	for (let i = start; i < end; i++) {
        $(films[i]).removeClass("hidden");
        $(films[i]).addClass("current-films");
        
	}
};

function nextPage(){
    let currentFilms = document.getElementsByClassName("current-films");
    hideCurrentFilms(currentFilms);
    removeCurrentFilmsClass(currentFilms);
    current_page++;
    displayFilms (filmCards, filmPerPage, current_page);    
};

function previousPage(){
    let currentFilms = document.getElementsByClassName("current-films");
    hideCurrentFilms(currentFilms);
    removeCurrentFilmsClass(currentFilms);
    current_page--;
    displayFilms (filmCards, filmPerPage, current_page);    
};

function hideCurrentFilms(currentFilms){
    for(i = 0; i < currentFilms.length; i++){  
        $(currentFilms[i]).addClass("hidden");       
    };
}

function removeCurrentFilmsClass(currentFilms){
    for(i = 0; i < currentFilms.length; i++){  
        $(currentFilms[i]).removeClass("current-films");       
    };
}