function simulateGA(data) {
    applyGAStatistics(data);
}

function applyGAStatistics(data) {
    let ageGroups = [0, 4, 5, 14, 15, 24, 25, 34, 35, 44, 45, 54, 55, 64, 65, 74, 75, 200];
    let percentageOfMalesAffected = [46, 17, 9, 10, 15, 21, 32, 47, 57];
    let percentageOfFemalesAffected = [35, 15, 16, 16, 22, 28, 40, 50, 55];

    maleGAStatistics(data, percentageOfMalesAffected, ageGroups);
    femaleGAStatistics(data, percentageOfFemalesAffected, ageGroups);
}

function maleGAStatistics(data, malePercentageArray, ageGroupsArray) {
    let maleAgeGroupCount = countMaleAgeGroups(data, ageGroupsArray);
    let numberOfMalesAffected = [];
    // let test = [];

    for (let i in malePercentageArray) {
        let malesAffected = Math.round(maleAgeGroupCount[i] * (malePercentageArray[i] / 100));
        numberOfMalesAffected.push(malesAffected);
    }

    let index = [];
    let counter = 0;
    let x = 0;
    let y = 1;

    for (let k in numberOfMalesAffected) {
        for (let i in data) {
            let min = ageGroupsArray[x];
            let max = ageGroupsArray[y];

            for (let j = min; j <= max; j++) {
                if (data[i].age === j && data[i].gender === 'M') {
                    index.push(i);
                }
            }
        }

        for (let i in index) {
            let random = index[Math.floor(Math.random() * index.length)];

            if (counter !== numberOfMalesAffected[k]) {
                data[random].GA = "Y";
                // test.push(data[random].CHINumber);
                counter++;
            } else {
                break;
            }
        }

        // console.table(test);
        index = [];
        counter = 0;
        x = x + 2;
        y = y + 2;
        test = [];
    }
    // console.table(numberOfMalesAffected);
}

function femaleGAStatistics(data, femalePercentageArray, ageGroupsArray) {
    let femaleAgeGroupCount = countFemaleAgeGroups(data, ageGroupsArray);
    let numberOfFemalesAffected = [];
    // let test = [];

    for (let i in femalePercentageArray) {
        let femalesAffected = Math.round(femaleAgeGroupCount[i] * (femalePercentageArray[i] / 100));
        numberOfFemalesAffected.push(femalesAffected);
    }

    let index = [];
    let counter = 0;
    let x = 0;
    let y = 1;

    for (let k in numberOfFemalesAffected) {
        for (let i in data) {
            let min = ageGroupsArray[x];
            let max = ageGroupsArray[y];

            for (let j = min; j <= max; j++) {
                if (data[i].age === j && data[i].gender === 'F') {
                    index.push(i);
                }
            }
        }

        for (let i in index) {
            let random = index[Math.floor(Math.random() * index.length)];

            if (counter !== numberOfFemalesAffected[k]) {
                data[random].GA = "Y";
                // test.push(data[random].CHINumber);
                counter++;
            } else {
                break;
            }
        }

        // console.table(test);
        index = [];
        counter = 0;
        x = x + 2;
        y = y + 2;
        test = [];
    }
    // console.table(numberOfFemalesAffected);
}

function countMaleAgeGroups(data, ageGroupsArray) {
    let countedData = [];
    let counter = 0;
    let min = 0;
    let max = 1;

    for (let k = 0; k <= 9; k++) {
        for (let i in data) {
            for (let j = ageGroupsArray[min]; j <= ageGroupsArray[max]; j++) {
                if (data[i].age === j && data[i].gender === 'M') {
                    counter++;
                }
            }
        }
    
        countedData.push(counter);
        counter = 0;
        min = min + 2;
        max = max + 2;
    }

    return countedData;
}

function countFemaleAgeGroups(data, ageGroupsArray) {
    let countedData = [];
    let counter = 0;
    let min = 0;
    let max = 1;

    for (let k = 0; k <= 9; k++) {
        for (let i in data) {
            for (let j = ageGroupsArray[min]; j <= ageGroupsArray[max]; j++) {
                if (data[i].age === j && data[i].gender === 'F') {
                    counter++;
                }
            }
        }
    
        countedData.push(counter);
        counter = 0;
        min = min + 2;
        max = max + 2;
    }

    return countedData;
}