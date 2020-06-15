document.addEventListener("DOMContentLoaded", function() { 
    let today = new Date()
    let month = today.getMonth()
    let monthNames = ["January", "February", "March", "April",
                   "May", "June", "July", "August", "September",
                   "Octboer", "November", "Decemeber"]
    console.log(monthNames[month])
    currentMonth = monthNames[month]
    document.getElementById("month").innerHTML = currentMonth
});