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
    let parentId = document.getElementById("current-card");

    let posterElement = $(parentId).find("img");
    let titleElement = $(parentId).find(".name-of-film");
    let summaryElement = $(parentId).find(".plot-summary");
    let genreElement = $(parentId).find(".genre-of-film");
    let durationElement = $(parentId).find(".duration-of-film");
    let dateElement = $(parentId).find(".date-of-film");

    let expandedCardImage = document.getElementById("expanded-card-image");
    let expandedCardTitle = document.getElementById("expanded-card-title");
    let expandedCardSummary = document.getElementById("expanded-plot-summary");
    let expandedCardGenre = document.getElementById("expanded-genre");
    let expandedCardDuration = document.getElementById("expanded-duration");
    let expandedCardDate = document.getElementById("expanded-date");

    expandedCardImage.src = posterElement[0].src;
    expandedCardTitle.innerHTML = titleElement[0].innerHTML;
    expandedCardSummary.innerHTML = summaryElement[0].innerHTML;
    expandedCardGenre.innerHTML = "Genre: " + genreElement[0].innerHTML;
    expandedCardDuration.innerHTML = "Duration: " + durationElement[0].innerHTML;
    expandedCardDate.innerHTML = "Date: " + dateElement[0].innerHTML;
   
}