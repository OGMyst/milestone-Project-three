document.addEventListener("DOMContentLoaded", function() { 
    $("#additional-info").hide();
    $("#notification-box").hide();
});

function showMoreInputs(){
    $("#additional-info").toggle("slow");
    $("#notification-box").toggle("slow");
};

function submitForm() {
  document.forms[0].submit();
};