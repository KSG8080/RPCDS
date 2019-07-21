document.getElementById("simulateBtn").addEventListener("click", function(){
    let textLabel = document.getElementById('wait');
    textLabel.textContent = "Please wait to be redirected to the Simulated Data page...";
    simulate();
});

function simulate() {
    let populationSize = 2000;
    let dataSet = [];

    localStorage.clear();
    clearData(dataSet);
    createPopulation(populationSize, dataSet);

    for (let each in dataSet) {
        genderDistribution(dataSet, dataSet[each].age);
    }

    assignFirstName(dataSet);
    assignSecondName(dataSet);
    assignDoB(dataSet);
    assignCHI(dataSet);
    simulateBMI(dataSet);
    assignDeprevation(dataSet);
    simulateCnR(dataSet);
    simulateDotSnST(dataSet);
    simulateGA(dataSet);
    simulateDA(dataSet);
    simulateDi1(dataSet);
    simulateDi2(dataSet);
    simulateHT(dataSet);
    storeData(dataSet);

    console.log(dataSet.length);
}

function findDataByKey(data, key, value) {
    let results = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i][key] === value) {
            results.push(data[i]);
        }
    }
    return results;
}

function clearData(data) {
    data.length = 0;
}

function storeData(data) {
    let JSONData = JSON.stringify(data);
    localStorage.setItem('StoredData', JSONData);
}