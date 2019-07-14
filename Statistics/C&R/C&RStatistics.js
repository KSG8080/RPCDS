window.addEventListener('DOMContentLoaded', run, false);

function run() {
    chart();
    displayData();
}

function chart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['0 - 4', '5 - 14', '15 - 24', '25 - 34', '35 - 44', '45 - 54', '55 - 64', '65 - 74', '75 & Over'],
            datasets: [{
                label: '# of Males',
                data: [dataCount(0, 4, 'M'), dataCount(5, 14, 'M'), dataCount(15, 24, 'M'), dataCount(25, 34, 'M'), dataCount(35, 44, 'M'), dataCount(45, 54, 'M'), dataCount(55, 64, 'M'), dataCount(65, 74, 'M'), dataCount(75, 200, 'M')],
                backgroundColor: "#3e95cd",
                borderWidth: 1
            }, {
                label: '# of Females',
                data: [dataCount(0, 4, 'F'), dataCount(5, 14, 'F'), dataCount(15, 24, 'F'), dataCount(25, 34, 'F'), dataCount(35, 44, 'F'), dataCount(45, 54, 'F'), dataCount(55, 64, 'F'), dataCount(65, 74, 'F'), dataCount(75, 200, 'F')],
                backgroundColor: "#8e5ea2",
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "# of People affected by the condition"
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Age Groups"
                    }
                }]
            }
        }
    });
}



function dataCount(min, max, Gender) {
    let data = JSON.parse(localStorage.getItem('StoredData'))
    let counter = 0;

    for (i in data) {
        for (j = min; j <= max; j++) {
            if (data[i].age === j && data[i].gender === Gender && data[i].CaR === 'Y') {
                counter++;
            }
        }
    }

    return counter;
}

function displayData() {
    let JSONString = localStorage.getItem('StoredData');
    let data = JSON.parse(JSONString);

    let html = "<tr>";
    html += "<th onclick=\"sortTable(0)\">CHI Number</th>";
    html += "<th onclick=\"sortTable(1)\">First Name</th>";
    html += "<th onclick=\"sortTable(2)\">Second Name</th>";
    html += "<th onclick=\"sortTable(3)\">Gender</th>";
    html += "<th onclick=\"sortTable(4)\">Age</th>";
    html += "<th onclick=\"sortTable(5)\">Date of Birth</th>";
    html += "<th onclick=\"sortTable(6)\">Postcode</th>";
    html += "<th onclick=\"sortTable(7)\">BMI</th>";
    html += "<th onclick=\"sortTable(8)\">Circulatory & Respiratory</th>";
    html += "</tr>";

    for (let i in data) {
        if (data[i].CaR === "Y") {
            html += "<tr>";
            html += "<td>" + data[i].CHINumber + "</td>";
            html += "<td>" + data[i].firstName + "</td>";
            html += "<td>" + data[i].secondName + "</td>";
            html += "<td>" + data[i].gender + "</td>";
            html += "<td>" + data[i].age + "</td>";
            html += "<td>" + data[i].DoB + "</td>";
            html += "<td>" + data[i].postcode + "</td>";
            html += "<td>" + data[i].BMI + "</td>";
            html += "<td>" + data[i].CaR + "</td>";
            html += "</tr>";
        }
    }

    document.getElementById("simulatedDataTable").innerHTML = html;
}