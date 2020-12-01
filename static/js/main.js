$(document).ready(function(){
        $('select').formSelect();
        $('.sidenav').sidenav();
});

function filmsTag(location){
    datalayer.push({event: 'film_page', userId: location})
}