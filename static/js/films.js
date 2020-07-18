let filmCards = document.getElementsByClassName("film-card");
let current_page = 1;
let filmPerPage = 6;
let numberOfPages;

document.addEventListener("DOMContentLoaded", function() {   
    displayFilms (filmCards, filmPerPage, current_page);
    SetupPagination(filmCards, filmPerPage, current_page)
    
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

function SetupPagination (films, films_per_page) {
    let page_count = Math.ceil(films.length /films_per_page);
    numberOfPages = page_count;

	for (let i = 1; i < page_count + 1; i++) {
		let pageSelectors = paginationButton(i);
		$("#paginate").append(pageSelectors);
    }
}

function paginationButton (pageNumber) {

	let pageSelector = document.createElement('li');
    let aTag = document.createElement('a');

    if (current_page === pageNumber){
        pageSelector.classList.add('active');
    };
    pageSelector.classList.add('waves-effect')  
    aTag.onclick = function() { 
        jumpToPage(pageNumber);
        };
    aTag.innerHTML = pageNumber
    $(pageSelector).append(aTag);

	return pageSelector;
}

function jumpToPage(pageNumber){
    let currentFilms = document.getElementsByClassName("current-films");
    current_page = pageNumber;

    hideCurrentFilms(currentFilms);
    removeCurrentFilmsClass(currentFilms);
    changeActivePage(current_page);
    displayFilms (filmCards, filmPerPage, current_page);
}

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

function changeActivePage(newPage){
    let currentPageElement = document.getElementsByClassName("active")
    let parentOfList = document.getElementById("paginate").children;
    
    currentPageElement[0].classList.remove('active');
    parentOfList[(newPage - 1)].classList.add("active");
}

const searchBar = document.forms['search-films'].querySelector('input');
const allfilms = document.querySelectorAll("#film-container .film-card")
searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  
    if(term === ""){
        for(i = 0; i < allfilms.length; i++){
            $(allfilms[i]).addClass("hidden");
            $(allfilms[i]).removeClass("current-films"); 
            displayFilms (filmCards, filmPerPage, current_page);
        }return 
    } 

  Array.from(allfilms).forEach((film) => {
    const titleObject = $(film).find(".name-of-film");
    let title = titleObject[0].innerHTML

    if(title.toLowerCase().indexOf(term) != -1){
      $(film).removeClass("hidden");
      $(film).addClass("current-films");
    }else {
      $(film).addClass("hidden");
      $(film).removeClass("current-films");
    }
    
  });
});