function viewMoreModal(edit_film, delete_film, film_poster, producer, director, duration, film_name, genre, release_date, screenplay, story, starring, plot_summary){
    const film = {edit_film, delete_film, film_poster, producer, director, duration, film_name, genre, release_date, screenplay, story, starring, plot_summary};
    $("#modal-background").css("display", "flex");
     
    displayFilmInfo(film);
}

function closeModal(){
    $("#modal-background").css("display", "none");
}

function displayFilmInfo(film){
    let getModalBackground = document.getElementById("modal-background");
    let pTagandSpanClass = `<p class="extra-info-text"> <span class="big-and-bold">`;
    getModalBackground.innerHTML = `<div class="modal-card">
                                    <!--------------------POSTER SIDE---------------------->
                                    <div id="poster-side">
                                        <div id="expanded-poster-box">
                                            <img src="${film.film_poster}"id="expanded-card-image" class="expanded-card-elements flex-center" alt="Poster Unavailable"/>
                                            <div id="change-wrapper">
                                                <div class="change-box">
                                                    <div class="change-film maroon-box">
                                                        <h1 class="change-text">
                                                        <!-- href for editfilm.html is above modal and inserted with js -->
                                                        <a href="${film.edit_film}"id="edit" class="mellow-yellow">Edit Film</a>
                                                        </h1>
                                                    </div>
                                                </div>
                                                <div class="change-box">
                                                    <div class="change-film maroon-box" onclick="confirmDeleteMessage('${film.delete_film}', '${film.film_name}')">
                                                        <h1 class="change-text mellow-yellow">Delete Film</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>

                                    <!--------------------INFO SIDE---------------------->
                                    <div id="info-side">
                                        <div id="expanded-title-box" class="expanded-card-elements">
                                            <h5 id="expanded-card-title" class="expanded-card-text">${film.film_name}</h5>
                                        </div>
                                        <div id="expanded-summary-box" class="expanded-card-elements">
                                            <p id="expanded-plot-summary" class="expanded-card-text">${film.plot_summary}</p>
                                        </div>
                                        <div id="required-information-box" class="expanded-card-elements flex-center">
                                            <div id="expanded-genre-box" class="inline-info-boxes">
                                                <p id="expanded-genre" class="expanded-card-text"> Genre: ${film.genre}</p>
                                            </div>
                                            <div id="expanded-duration-box" class="inline-info-boxes">
                                                <p id="expanded-duration" class="expanded-card-text">Duration: ${film.duration} mins</p>
                                            </div>
                                            <div id="expanded-date-box" class="inline-info-boxes">
                                                <p id="expanded-date" class="expanded-card-text">Date: ${film.release_date}</p>
                                            </div>
                                        </div>

                                        <!-----------------EXTRA INFO------------------>
                                        <div id="extra-info">
                                            <div id="director-and-co" class="extra-info-box">
                                                ${pTagandSpanClass}Director: </span>${film.director}</p>
                                                ${pTagandSpanClass}Produced by: </span> ${film.producer}</p>
                                                ${pTagandSpanClass}Screenplay by: </span> ${film.screenplay}</p>
                                                ${pTagandSpanClass}Story by: </span>${film.story}</p>
                                            </div>
                                            <div id="actors" class="extra-info-box">
                                                ${pTagandSpanClass}Starring: </span>${film.starring}</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div id="close-modal" onclick="closeModal()">&times</div>
                                </div>`;
}


function confirmDeleteMessage(deleteFilm, name){
    $("#confirm-modal-background").css("display", "flex");
    $("#modal-background").css("display", "none");
    let confirmDeleteModal = document.getElementById("confirm-modal-background");
    confirmDeleteModal.innerHTML = 
    `<div class="modal-card" id="confirm-card">
            <div id="message-box">
                <p id="confirm-message">
                Are you sure you want to delete the information for <span class="mellow-yellow">${name}</span>
                </p>
            </div>
            <div id="confirm-box-container" class="flex-center">
                <div class="confirm-wrapper flex-center">
                    <div class="confirm-boxes maroon-box">
                        <a id="delete-film" href="${deleteFilm}">
                            <p id="confirm-delete" class="mellow-yellow">Yes</p>
                        </a>
                    </div>
                </div>
                <div class="confirm-wrapper flex-center">
                    <div class="confirm-boxes maroon-box" onclick="returnToModal()">
                        <p id="stop-delete" class="mellow-yellow">No</p>
                    </div>
                </div>
            </div>
        </div>`;
}

function returnToModal(){
    $("#confirm-modal-background").css("display", "none");
    $("#modal-background").css("display", "flex");
}