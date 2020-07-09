function viewMoreModal(editFilm, film_poster, producer, director, duration, film_name, genre, release_date, screenplay, story, starring, plot_summary){
    const film = {editFilm, film_poster, producer, director, duration, film_name, genre, release_date, screenplay, story, starring, plot_summary}
    $("#modal-background").css("display", "flex");
    giveCurrentCardId();
    displayFilmInfo(film);
};

function closeModal(){
    $("#modal-background").css("display", "none");
    document.getElementById("current-card").id = "not-current";
}

function giveCurrentCardId(){
    let identifyInstance = event.target
    let findCurrentParent = $(identifyInstance).parents(".film-card")
    findCurrentParent[0].id = "current-card";
}

function displayFilmInfo(film){
    let getModalBackground = document.getElementById("modal-background");
    let pTagandSpanClass = `<p class="extra-info-text"> <span class="big-and-bold">`
    getModalBackground.innerHTML = `<div class="modal-card">
                                    <!--------------------POSTER SIDE---------------------->
                                    <div id="poster-side">
                                        <div id="expanded-poster-box">
                                            <img src="${film.film_poster}"id="expanded-card-image" class="expanded-card-elements flex-center"/>
                                            <div id="change-wrapper">
                                                <div class="change-box">
                                                    <div class="change-film maroon-box">
                                                        <h1 class="change-text">
                                                        <!-- href for editfilm.html is above modal and inserted with js -->
                                                        <a href="${film.editFilm}"id="edit" class="mellow-yellow">Edit Film</a>
                                                        </h1>
                                                    </div>
                                                </div>
                                                <div class="change-box">
                                                    <div class="change-film maroon-box" onclick="confirmDeleteMessage()">
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
                                                <p id="expanded-duration" class="expanded-card-text">Duration: ${film.duration}</p>
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
                                </div>`
};


function confirmDeleteMessage(){
    $("#confirm-modal-background").css("display", "flex");
    $("#modal-background").css("display", "none");

    let parentId = document.getElementById("current-card");
    let deleteFilm = $(parentId).find(".delete-film-link")
    let deleteFilmButton = document.getElementById("delete-film")
    let confirmMessageElement = document.getElementById("confirm-message");
    let filmName = document.getElementById("expanded-card-title").innerHTML;
    
    deleteFilmButton.href = deleteFilm[0].href;
    confirmMessageElement.innerHTML = `Are you sure you want to delete the information for <span class="mellow-yellow">${filmName}</span>`;
}

function returnToModal(){
    $("#confirm-modal-background").css("display", "none");
    $("#modal-background").css("display", "flex");

}