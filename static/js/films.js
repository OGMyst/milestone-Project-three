let expandedCardImage ;
let currentId ;

function viewMoreModal(){   
    $("#modal-background").css("display", "flex");

    let identifyInstance = event.target
    let findCurrentParent = $(identifyInstance).parents(".film-card")
    findCurrentParent[0].id = "current-card";
    currentId = findCurrentParent[0].id;
    
    let parentId = document.getElementById("current-card");
    let posterelement = $(parentId).find("img");
    let expandedCardImage = document.getElementById("expanded-card-image")
    
    expandedCardImage.src = posterelement[0].src
    let modalPoster = expandedCardImage.src
    return modalPoster
};

function closeModal(){
    $("#modal-background").css("display", "none");
    document.getElementById("current-card").id = "not-current";
}

