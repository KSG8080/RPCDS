var JSONString = localStorage.getItem('StoredData');
var data = JSON.parse(JSONString);

function simulateCondition() {
    var percentageOfMalesAffected = [46, 17, 9, 10, 15, 21, 32, 47, 57];
    var percentageOfFemalesAffected = [35, 15, 16, 16, 22, 28, 40, 50, 55];

    applyStatistics(data, percentageOfMalesAffected, percentageOfFemalesAffected);
}

function applyStatistics(dataArray, malePercentageArray, femalePercentageArray) {
    // var maleAgeGroupCount = countMaleAgeGroups();
    // var femaleAgeGroupCount = countFemaleAgeGroups();
    // var results = [];
    //
    // for (var i in malePercentageArray) {
    //     var malesAffected = Math.round(maleAgeGroupCount[i] * (malePercentageArray[i] / 100));
    // }
    //
    // console.table(results);
}

function countMaleAgeGroups() {
    var countedData = [];
    var counter = 0;
    var i;
    var j;

    for (i in data){
        for (j = 0; j <= 4; j ++){
            if (data[i].age === j && data[i].gender === 'M') {
                counter++;
            }
        }
    }

    countedData.push(counter);
    counter = 0;

    for (i in data){
        for (j = 5; j <= 14; j ++){
            if (data[i].age === j && data[i].gender === 'M') {
                counter++;
            }
        }
    }

    countedData.push(counter);
    counter = 0;

    for (i in data){
        for (j = 15; j <= 24; j ++){
            if (data[i].age === j && data[i].gender === 'M') {
                counter++;
            }
        }
    }

    countedData.push(counter);
    counter = 0;

    for (i in data){
        for (j = 25; j <= 34; j ++){
            if (data[i].age === j && data[i].gender === 'M') {
                counter++;
            }
        }
    }

    countedData.push(counter);
    counter = 0;

    for (i in data){
        for (j = 35; j <= 44; j ++){
            if (data[i].age === j && data[i].gender === 'M') {
                counter++;
            }
        }
    }

    countedData.push(counter);
    counter = 0;

    for (i in data){
        for (j = 45; j <= 54; j ++){
            if (data[i].age === j && data[i].gender === 'M') {
                counter++;
            }
        }
    }

    countedData.push(counter);
    counter = 0;

    for (i in data){
        for (j = 55; j <= 64; j ++){
            if (data[i].age === j && data[i].gender === 'M') {
                counter++;
            }
        }
    }

    countedData.push(counter);
    counter = 0;

    for (i in data){
        for (j = 65; j <= 74; j ++){
            if (data[i].age === j && data[i].gender === 'M') {
                counter++;
            }
        }
    }

    countedData.push(counter);
    counter = 0;

    for (i in data){
        if (data[i].age >= 75 && data[i].gender === 'M') {
            counter++;
        }
    }

    countedData.push(counter);

    return countedData;
}

function countFemaleAgeGroups() {
    var countedData = [];
    var counter = 0;
    var i;
    var j;

    for (i in data){
        for (j = 0; j <= 4; j ++){
            if (data[i].age === j && data[i].gender === 'F') {
                counter++;
            }
        }
    }

    countedData.push(counter);
    counter = 0;

    for (i in data){
        for (j = 5; j <= 14; j ++){
            if (data[i].age === j && data[i].gender === 'F') {
                counter++;
            }
        }
    }

    countedData.push(counter);
    counter = 0;

    for (i in data){
        for (j = 15; j <= 24; j ++){
            if (data[i].age === j && data[i].gender === 'F') {
                counter++;
            }
        }
    }

    countedData.push(counter);
    counter = 0;

    for (i in data){
        for (j = 25; j <= 34; j ++){
            if (data[i].age === j && data[i].gender === 'F') {
                counter++;
            }
        }
    }

    countedData.push(counter);
    counter = 0;

    for (i in data){
        for (j = 35; j <= 44; j ++){
            if (data[i].age === j && data[i].gender === 'F') {
                counter++;
            }
        }
    }

    countedData.push(counter);
    counter = 0;

    for (i in data){
        for (j = 45; j <= 54; j ++){
            if (data[i].age === j && data[i].gender === 'F') {
                counter++;
            }
        }
    }

    countedData.push(counter);
    counter = 0;

    for (i in data){
        for (j = 55; j <= 64; j ++){
            if (data[i].age === j && data[i].gender === 'F') {
                counter++;
            }
        }
    }

    countedData.push(counter);
    counter = 0;

    for (i in data){
        for (j = 65; j <= 74; j ++){
            if (data[i].age === j && data[i].gender === 'F') {
                counter++;
            }
        }
    }

    countedData.push(counter);
    counter = 0;

    for (i in data){
        if (data[i].age >= 75 && data[i].gender === 'F') {
            counter++;
        }
    }

    countedData.push(counter);

    return countedData;
}