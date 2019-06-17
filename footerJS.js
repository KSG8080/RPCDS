function getFooter() {
    let day = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    document.getElementById("footer").innerHTML = "CC - By Karol Groszewski " + day + " " + monthNames[month] + " " + year;
}