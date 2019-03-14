window.addEventListener('DOMContentLoaded', displayData, false);

function displayData() {
    var JSONString = localStorage.getItem('StoredData');
    var data = JSON.parse(JSONString);

    var html = "<tr>";
    html += "<th>Index</th>";
    html += "<th>First Name</th>";
    html += "<th>Second Name</th>";
    html += "<th>Gender</th>";
    html += "<th>Age</th>";
    html += "<th>Date of Birth</th>";
    html += "<th>Postcode</th>";
    html += "<th>CHI Number</th>";
    html += "<th>BMI</th>";
    html += "</tr>";

    for (var i = 0; i < data.length; i++) {
        html += "<tr>";
        html += "<td>" + i + "</td>";
        html += "<td>" + data[i].firstName + "</td>";
        html += "<td>" + data[i].secondName + "</td>";
        html += "<td>" + data[i].gender + "</td>";
        html += "<td>" + data[i].age + "</td>";
        html += "<td>" + data[i].DoB + "</td>";
        html += "<td>" + data[i].postcode + "</td>";
        html += "<td>" + data[i].CHINumber + "</td>";
        html += "<td>" + data[i].BMI + "</td>";
        html += "</tr>";
    }

    document.getElementById("simulatedDataTable").innerHTML = html;
}