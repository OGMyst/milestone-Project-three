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
    let posterelement = $(parentId).find("img");
    let expandedCardImage = document.getElementById("expanded-card-image")
    expandedCardImage.src = posterelement[0].src
}