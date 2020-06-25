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
    console.log(summaryElement)
    let expandedCardImage = document.getElementById("expanded-card-image")
    let expandedCardTitle = document.getElementById("expanded-card-title")
    let expandedCardSummary = document.getElementById("expanded-plot-summary")

    expandedCardImage.src = posterElement[0].src;
    expandedCardTitle.innerHTML = titleElement[0].innerHTML;
    expandedCardSummary.innerHTML = summaryElement[0].innerHTML;
   
}