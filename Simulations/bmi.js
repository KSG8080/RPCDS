function simulateBMI(data) {
    applyBMIStatistics(data);
}

function applyBMIStatistics(data) {
    let ageGroups = [16, 24, 25, 34, 35, 44, 45, 54, 55, 64, 65, 74, 75, 200];

    let percentageOfMalesAffectedOverweight = [39, 61, 70, 72, 79, 81, 70];
    let percentageOfMalesAffectedObese = [12, 22, 28, 32, 40, 33, 22];

    maleBMIOverweightStatistics(data, percentageOfMalesAffectedOverweight, ageGroups);
    maleBMIObeseStatistics(data, percentageOfMalesAffectedObese, ageGroups);
    maleBMIFillInStatistics(data, ageGroups);

    let percentageOfFemalesAffectedOverweight = [43, 44, 60, 70, 68, 67, 78];
    let percentageOfFemalesAffectedObese = [20, 23, 30, 33, 31, 32, 28];

    femaleBMIOverweightStatistics(data, percentageOfFemalesAffectedOverweight, ageGroups);
    femaleBMIObeseStatistics(data, percentageOfFemalesAffectedObese, ageGroups);
    femaleBMIFillInStatistics(data, ageGroups);
}

function maleBMIOverweightStatistics(data, malePercentageArray, ageGroupsArray) {
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
                if (data[i].age === j && data[i].gender === 'M' && data[i].BMI === 'N/A') {
                    index.push(i);
                }
            }
        }

        for (let i in index) {
            let random = index[Math.floor(Math.random() * index.length)];
            let randomBMI = Math.floor(Math.random() * (29 - 25)) + 25;

            if (counter !== numberOfMalesAffected[k]) {
                data[random].BMI = randomBMI;
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
        // test = [];
    }
    // console.table(numberOfMalesAffected);
}

function maleBMIObeseStatistics(data, malePercentageArray, ageGroupsArray) {
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
                if (data[i].age === j && data[i].gender === 'M' && data[i].BMI === 'N/A') {
                    index.push(i);
                }
            }
        }

        for (let i in index) {
            let random = index[Math.floor(Math.random() * index.length)];
            let randomBMI = Math.floor(Math.random() * (42 - 30)) + 30;

            if (counter !== numberOfMalesAffected[k]) {
                data[random].BMI = randomBMI;
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
        // test = [];
    }
    // console.table(numberOfMalesAffected);
}

function maleBMIFillInStatistics(data) {
    // let test = [];

    for (let i in data) {
        if (data[i].age >= 16 && data[i].gender === 'M' && data[i].BMI === 'N/A') {
            let randomBMI = Math.floor(Math.random() * (24 - 12)) + 12;
            data[i].BMI = randomBMI;
        }

    }

    // console.table(test);
    // test = [];
    // console.table(numberOfMalesAffected);
}

function femaleBMIOverweightStatistics(data, femalePercentageArray, ageGroupsArray) {
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
                if (data[i].age === j && data[i].gender === 'F' && data[i].BMI === 'N/A') {
                    index.push(i);
                }
            }
        }

        for (let i in index) {
            let random = index[Math.floor(Math.random() * index.length)];
            let randomBMI = Math.floor(Math.random() * (29 - 25)) + 25;

            if (counter !== numberOfFemalesAffected[k]) {
                data[random].BMI = randomBMI;
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
        // test = [];
    }
    // console.table(numberOfMalesAffected);
}

function femaleBMIObeseStatistics(data, femalePercentageArray, ageGroupsArray) {
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
                if (data[i].age === j && data[i].gender === 'F' && data[i].BMI === 'N/A') {
                    index.push(i);
                }
            }
        }

        for (let i in index) {
            let random = index[Math.floor(Math.random() * index.length)];
            let randomBMI = Math.floor(Math.random() * (42 - 30)) + 30;

            if (counter !== numberOfFemalesAffected[k]) {
                data[random].BMI = randomBMI;
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
        // test = [];
    }
    // console.table(numberOfMalesAffected);
}

function femaleBMIFillInStatistics(data) {
    // let test = [];

    for (let i in data) {
        if (data[i].age >= 16 && data[i].gender === 'F' && data[i].BMI === 'N/A') {
            let randomBMI = Math.floor(Math.random() * (24 - 12)) + 12;
            data[i].BMI = randomBMI;
        }

    }

    // console.table(test);
    // test = [];
    // console.table(numberOfMalesAffected);
}