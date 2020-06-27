function viewMoreModal(){   
    $("#modal-background").css("display", "flex");
    giveCurrentCardId();
    displayFilmInfo();
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

function displayFilmInfo(){
    let editFilm = document.getElementById("edit-film-link")
    let parentId = document.getElementById("current-card");
    displayExtraInfo();

    let posterElement = $(parentId).find("img");
    let titleElement = $(parentId).find(".name-of-film");
    let summaryElement = $(parentId).find(".plot-summary");
    let genreElement = $(parentId).find(".genre-of-film");
    let durationElement = $(parentId).find(".duration-of-film");
    let dateElement = $(parentId).find(".date-of-film");

    let editFilmButton = document.getElementById("edit")
    let expandedCardImage = document.getElementById("expanded-card-image");
    let expandedCardTitle = document.getElementById("expanded-card-title");
    let expandedCardSummary = document.getElementById("expanded-plot-summary");
    let expandedCardGenre = document.getElementById("expanded-genre");
    let expandedCardDuration = document.getElementById("expanded-duration");
    let expandedCardDate = document.getElementById("expanded-date");

    editFilmButton.href = editFilm.href;
    expandedCardImage.src = posterElement[0].src;
    expandedCardTitle.innerHTML = titleElement[0].innerHTML;
    expandedCardSummary.innerHTML = summaryElement[0].innerHTML;
    expandedCardGenre.innerHTML = "Genre: " + genreElement[0].innerHTML;
    expandedCardDuration.innerHTML = "Duration: " + durationElement[0].innerHTML;
    expandedCardDate.innerHTML = "Date: " + dateElement[0].innerHTML;

function displayExtraInfo(){
    
    let directorElement = $(parentId).find(".director");
    let producerElement = $(parentId).find(".producer");
    let screenplayElement = $(parentId).find(".screenplay");
    let storyElement = $(parentId).find(".story");
    let starringElement = $(parentId).find(".starring");

    let extraInfoLeft = document.getElementById("director-and-co");
    let extraInforight = document.getElementById("actors");

    let directorContent = `<p> <span>Director: </span>${directorElement[0].innerHTML}</p>`
    let producerContent = `<p> <span>Produced by: </span> ${producerElement[0].innerHTML}</p>`
    let screenplayContent = `<p> <span>Screenplay by: </span> ${screenplayElement[0].innerHTML}</p>`
    let storyContent = `<p> <span>Story by: </span>${storyElement[0].innerHTML}</p>`
    let starringContent = `<p> <span>Starring: </span>${starringElement[0].innerHTML}</p>`

    $(extraInfoLeft).append(directorContent, producerContent, screenplayContent, storyContent)
    $(extraInforight).append(starringContent)
}
};