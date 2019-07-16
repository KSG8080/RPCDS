window.addEventListener('DOMContentLoaded', displayData, false);

function displayData() {
    let JSONString = localStorage.getItem('StoredData');
    let data = JSON.parse(JSONString);

    var gridOptions = {
        columnDefs: [
            {headerName: 'CHI Number', field: 'CHINumber'},
            {headerName: 'First Name', field: 'firstName'},
            {headerName: 'Second Name', field: 'secondName'},
            {headerName: 'Gender', field: 'gender'},
            {headerName: 'Age', field: 'age'},
            {headerName: 'Date of Birth', field: 'DoB'},
            {headerName: 'Postcode', field: 'postcode'},
            {headerName: 'SIMD16 Rank', field: 'SIMD16_Rank'},
            {headerName: 'BMI', field: 'BMI'},
            {headerName: 'Circulatory & Respiratory', field: 'CaR'}
        ]
    };

    // lookup the container we want the Grid to use
    var eGridDiv = document.querySelector('#myGrid');

    // create the grid passing in the div to use together with the columns & data we want to use
    new agGrid.Grid(eGridDiv, gridOptions);

    gridOptions.api.setRowData(data);
}