let JSONString = localStorage.getItem('StoredData');
let data = JSON.parse(JSONString);

function simulateCondition() {
    let percentageOfMalesAffected = [46, 17, 9, 10, 15, 21, 32, 47, 57];
    let percentageOfFemalesAffected = [35, 15, 16, 16, 22, 28, 40, 50, 55];

    applyStatistics(data, percentageOfMalesAffected, percentageOfFemalesAffected);
}

function applyStatistics(dataArray, malePercentageArray, femalePercentageArray) {
    // let maleAgeGroupCount = countMaleAgeGroups();
    // let femaleAgeGroupCount = countFemaleAgeGroups();
    // let results = [];
    //
    // for (let i in malePercentageArray) {
    //     let malesAffected = Math.round(maleAgeGroupCount[i] * (malePercentageArray[i] / 100));
    // }
    //
    // console.table(results);
}

function countMaleAgeGroups() {
    let countedData = [];
    let counter = 0;
    let i;
    let j;

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
    let countedData = [];
    let counter = 0;
    let i;
    let j;

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