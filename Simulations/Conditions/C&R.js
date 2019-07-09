function simulateCnR(data) {
    applyStatistics(data);
}

function applyStatistics(data) {
    let percentageOfMalesAffected = [46, 17, 9, 10, 15, 21, 32, 47, 57];
    // let percentageOfFemalesAffected = [35, 15, 16, 16, 22, 28, 40, 50, 55];
    
    maleCnR(data, percentageOfMalesAffected);
    // femaleCnR(data, percentageOfFemalesAffected);
}

function countMaleAgeGroups(data) {
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

function countFemaleAgeGroups(data) {
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

function maleCnR(data, malePercentageArray) {
    let maleAgeGroupCount = countMaleAgeGroups(data);
    let mResults = [];

    for (let i in malePercentageArray) {
        let malesAffected = Math.round(maleAgeGroupCount[i] * (malePercentageArray[i] / 100));
        mResults.push(malesAffected);
    }

    for (i in data){
        for (j = 0; j <= 4; j ++){
            if (data[i].age === j && data[i].gender === 'M') {
                data[i].CaR = "Y";
            }
        }
    }

    console.table(mResults);
}

function femaleCnR(data, femalePercentageArray) {
    let femaleAgeGroupCount = countFemaleAgeGroups(data);
    let fResults = [];

    for (let i in femalePercentageArray) {
        femalesAffected = Math.round(femaleAgeGroupCount[i] * (femalePercentageArray[i] / 100));
        fResults.push(femalesAffected);
    }

    for (i in data){
        for (j = 0; j <= 4; j ++){
            if (data[i].age === j && data[i].gender === 'F') {
                data[i].CaR = "Y";
            }
        }
    }

    // console.table(fResults);
}