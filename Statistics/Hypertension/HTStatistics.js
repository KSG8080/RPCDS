window.addEventListener('DOMContentLoaded', run, false);

function run() {
    chart();
    displayDAData();
}

function chart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['35 - 54', '55 - 64', '65 - 74', '75 & Over'],
            datasets: [{
                label: '# of Males',
                data: [dataCount(35, 54, 'M'), dataCount(55, 64, 'M'), dataCount(65, 74, 'M'), dataCount(75, 200, 'M')],
                backgroundColor: "#3e95cd",
                borderWidth: 1
            }, {
                label: '# of Females',
                data: [dataCount(35, 54, 'F'), dataCount(55, 64, 'F'), dataCount(65, 74, 'F'), dataCount(75, 200, 'F')],
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
            },
            title: {
                display: true,
                text: 'Hypertension Statistics'
            }
        }
    });
}



function dataCount(min, max, Gender) {
    let data = JSON.parse(localStorage.getItem('StoredData'))
    let counter = 0;

    for (i in data) {
        for (j = min; j <= max; j++) {
            if (data[i].age === j && data[i].gender === Gender && data[i].HT === 'Y') {
                counter++;
            }
        }
    }

    return counter;
}

function displayDAData() {
    let JSONString = localStorage.getItem('StoredData');
    let data = JSON.parse(JSONString);
    let statistics = [];

    for (i in data) {
        if (data[i].HT === "Y") {
            statistics.push(data[i]);
        }
    }

    var gridOptions = {
        columnDefs: [
            {
                headerName: 'Patient Details',
                children: [
                    { headerName: 'CHI Number', field: 'CHINumber', sortable: true, filter: true },
                    { headerName: 'First Name', field: 'firstName', sortable: true, filter: true },
                    { headerName: 'Second Name', field: 'secondName', sortable: true, filter: true },
                    { headerName: 'Gender', field: 'gender', sortable: true, filter: true },
                    { headerName: 'Age', field: 'age', sortable: true, filter: 'number' },
                    { headerName: 'Date of Birth', field: 'DoB', sortable: true, filter: 'date' },
                    { headerName: 'Postcode', field: 'postcode', sortable: true, filter: true },
                    { headerName: 'SIMD16 Rank', field: 'SIMD16_Rank', sortable: true, filter: true },
                    { headerName: 'BMI', field: 'BMI', sortable: true, filter: true }
                ]
            },
            {
                headerName: 'Conditions',
                children: [
                    { headerName: 'Circulatory & Respiratory', field: 'CaR', sortable: true, filter: true },
                    { headerName: 'Diseases of the Skin & Subcutaneous Tissue', field: 'DotSaST', sortable: true, filter: true },
                    { headerName: 'General Abnormal', field: 'GA', sortable: true, filter: true },
                    { headerName: 'Digestive & Abdominal', field: 'DA', sortable: true, filter: true },
                    { headerName: 'Diabetes Type 1', field: 'Di1', sortable: true, filter: true },
                    { headerName: 'Diabetes Type 2', field: 'Di2', sortable: true, filter: true },
                    { headerName: 'Hypertension', field: 'HT', sortable: true, filter: true },
                ]
            }
        ]
    };

    // lookup the container we want the Grid to use
    var eGridDiv = document.querySelector('#myGrid');

    // create the grid passing in the div to use together with the columns & data we want to use
    new agGrid.Grid(eGridDiv, gridOptions);

    gridOptions.api.setRowData(statistics);

    var allColumnIds = [];
    gridOptions.columnApi.getAllColumns().forEach(function (column) {
        allColumnIds.push(column.colId);
    });
    gridOptions.columnApi.autoSizeColumns(allColumnIds);

    document.querySelector('#btnExportCSV').addEventListener('click', function () {
        var params = {
            fileName: 'dtools - Hypertension Statistics',
        };

        gridOptions.api.exportDataAsCsv(params);
    });
}