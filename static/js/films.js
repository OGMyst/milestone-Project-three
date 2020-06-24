
function viewMoreModal(){   
    $("#modal-background").css("display", "flex");
    let identifyInstance = event.target
    let findCurrentParent = $(identifyInstance).parents(".film-card")
    findCurrentParent[0].id = "current-card";
    let parentId = document.getElementById("current-card");
    let posterelement = $(parentId).find("img");
    let expandedCardImage = document.getElementById("expanded-card-image")
    expandedCardImage.src = posterelement[0].src
    console.log(posterelement[0].src)
};

function closeModal(){
    $("#modal-background").css("display", "none");
}

