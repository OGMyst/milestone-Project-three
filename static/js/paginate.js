let filmCards = document.getElementsByClassName("film-card");
let current_page = 1;
let filmPerPage = 5;

document.addEventListener("DOMContentLoaded", function() { 
    displayFilms (filmCards, filmPerPage, current_page);
    SetupPagination(filmCards, filmPerPage)
    
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

function SetupPagination (films, films_per_page) {

	let page_count = Math.ceil(films.length /films_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let pageSelectors = paginationButton(i);
		$("#next-page").before(pageSelectors);
	}
}

function paginationButton (pageNumber) {

	let pageSelector = document.createElement('li');
    let aTag = document.createElement('a');

    if (current_page == pageNumber) pageSelector.classList.add('active');
    pageSelector.classList.add('page-item')
    aTag.classList.add('page-link')
    aTag.onclick = function() { 
        jumpToPage(pageNumber);
        };
    aTag.innerHTML = pageNumber
    $(pageSelector).append(aTag);
    console.log(aTag)
	// 	let current_btn = document.querySelector('.pagenumbers button.active');
	// 	current_btn.classList.remove('active');

	// 	button.classList.add('active');
	// });

	return pageSelector;
}

function jumpToPage(pageNumber){
    let currentFilms = document.getElementsByClassName("current-films");
    hideCurrentFilms(currentFilms);
    removeCurrentFilmsClass(currentFilms);
    current_page = pageNumber;
    displayFilms (filmCards, filmPerPage, current_page);
}