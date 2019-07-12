window.addEventListener('DOMContentLoaded', dataCount, false);

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['0 - 4', '5 - 14', '15 - 24', '25 - 34', '35 - 44', '45 - 54', '55 - 64', '65 - 74', '75 & Over'],
        datasets: [{
            label: '# of Males',
            data: [dataCount(0,4), 19, 3, 5, 2, 3, 5, 8, 10],
            backgroundColor: "#3e95cd",
            borderWidth: 1
        }, {
            label: '# of Females',
            data: [dataCount(0,4), 2, 4, 6, 8, 10, 12, 14, 16],
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

function dataCount(min, max) {
    var data = JSON.parse(localStorage.getItem('StoredData'))
    var counter = 0;

    for (i in data){
        for (j = min; j <= max; j ++){
            if (data[i].age === j && data[i].gender === 'M' && data[i].CaR === 'Y') {
                counter++;
            }
        }
    }

    return counter;
}