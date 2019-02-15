function getFooter() {
    var day = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    document.getElementById("footer").innerHTML = "CC - By Karol Groszewski " + day + " " + monthNames[month] + " " + year;
}