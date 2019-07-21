function simulateDi1(data) {
    applyDi1Statistics(data);
}

function applyDi1Statistics(data) {
    let ageGroups = [0, 9, 10, 19, 20, 29, 30, 39, 40, 49, 50, 59, 60, 69, 70, 79, 80, 200];
    let percentageOfMalesAffected = [0, 0.1, 0.1, 0.2, 0.5, 1.1, 1.5, 1.4, 0.7];
    let percentageOfFemalesAffected = [0, 0.1, 0.1, 0.2, 0.4, 0.8, 1.2, 1.1, 0.6];

    maleDi1Statistics(data, percentageOfMalesAffected, ageGroups);
    femaleDi1Statistics(data, percentageOfFemalesAffected, ageGroups);
}

function maleDi1Statistics(data, malePercentageArray, ageGroupsArray) {
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
                data[random].Di1 = "Y";
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

function femaleDi1Statistics(data, femalePercentageArray, ageGroupsArray) {
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
                data[random].Di1 = "Y";
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