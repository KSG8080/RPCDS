window.addEventListener('DOMContentLoaded', displayData, false);

function displayData() {
    let JSONString = localStorage.getItem('StoredData');
    let data = JSON.parse(JSONString);

    var gridOptions = {
        columnDefs: [
            {
                headerName: 'Patient Details',
                children: [
                    { headerName: 'CHI Number', field: 'CHINumber', sortable: true, filter: true },
                    { headerName: 'First Name', field: 'firstName', sortable: true, filter: true },
                    { headerName: 'Second Name', field: 'secondName', sortable: true, filter: true },
                    { headerName: 'Gender', field: 'gender', sortable: true, filter: true },
                    { headerName: 'Age', field: 'age', sortable: true, filter: 'number'},
                    { headerName: 'Date of Birth', field: 'DoB', sortable: true, filter: 'date'},
                    { headerName: 'Postcode', field: 'postcode', sortable: true, filter: true },
                    { headerName: 'SIMD16 Rank', field: 'SIMD16_Rank', sortable: true, filter: true },
                    { headerName: 'BMI', field: 'BMI', sortable: true, filter: true }
                ]
            },
            {
                headerName: 'Conditions',
                children: [
                    { headerName: 'Circulatory & Respiratory', field: 'CaR', sortable: true, filter: true }
                ]
            }
        ]
    };

    // lookup the container we want the Grid to use
    var eGridDiv = document.querySelector('#myGrid');

    // create the grid passing in the div to use together with the columns & data we want to use
    new agGrid.Grid(eGridDiv, gridOptions);

    gridOptions.api.setRowData(data);

    var allColumnIds = [];
    gridOptions.columnApi.getAllColumns().forEach(function (column) {
        allColumnIds.push(column.colId);
    });
    gridOptions.columnApi.autoSizeColumns(allColumnIds);
}