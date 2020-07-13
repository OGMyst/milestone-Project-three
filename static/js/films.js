const searchBar = document.forms['search-films'].querySelector('input');
const films = document.querySelectorAll("#film-container .film-card")
searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();

  Array.from(films).forEach((film) => {
    const titleObject = $(film).find(".name-of-film");
    let title = titleObject[0].innerHTML

    if(title.toLowerCase().indexOf(term) != -1){
      $(film).css("display", "flex")
    } else {
      $(film).css("display", "none")
    }
  });
});

console.log(searchBar)