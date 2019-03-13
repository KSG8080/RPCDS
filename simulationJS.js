var population = 1000;
var data = new Array();

function simulate() {
    clearArray();
    for (var age = 0; age <= 90; age++) {
        var peopleWithAge = Math.round(population * ((ageDistribution(age) - 0.05) / 100));
        for (var i = 0; i < peopleWithAge; i++) {
            data.push(createPerson(age))
        }
    }

    if(data.length < population) {
        var toSimulate = population - data.length;

        for (var j = 0; j < toSimulate; j++) {
            var randomAge = Math.floor((Math.random() * 90));
            data.push(createPerson(randomAge))
        }
    }

    console.log(data.length);
}

function createPerson(age) {
    var person = new Object();

    person.firstName = "John";
    person.secondName = "K";
    person.gender = "M";
    person.age = age;
    person.postcode = "G21";
    person.CHINumber = 123456789;
    person.BMI = 5.5;
    person.CirculatoryAndRespiratory = "N";

    return person;
}

function ageDistribution(age) {
    var ageDistributionData = [
        0.99,
        1.03,
        1.05,
        1.06,
        1.08,
        1.11,
        1.14,
        1.09,
        1.12,
        1.11,
        1.07,
        1.05,
        1.04,
        1.02,
        0.99,
        0.98,
        1.02,
        1.05,
        1.10,
        1.19,
        1.27,
        1.28,
        1.30,
        1.35,
        1.38,
        1.45,
        1.45,
        1.39,
        1.38,
        1.38,
        1.34,
        1.33,
        1.32,
        1.27,
        1.29,
        1.31,
        1.30,
        1.27,
        1.23,
        1.14,
        1.12,
        1.18,
        1.19,
        1.21,
        1.28,
        1.36,
        1.41,
        1.40,
        1.45,
        1.48,
        1.49,
        1.48,
        1.53,
        1.51,
        1.50,
        1.47,
        1.43,
        1.38,
        1.37,
        1.33,
        1.29,
        1.25,
        1.20,
        1.18,
        1.15,
        1.11,
        1.11,
        1.11,
        1.13,
        1.16,
        1.25,
        0.93,
        0.88,
        0.89,
        0.84,
        0.76,
        0.70,
        0.70,
        0.67,
        0.64,
        0.59,
        0.56,
        0.51,
        0.46,
        0.42,
        0.39,
        0.34,
        0.29,
        0.25,
        0.20,
        0.77
    ];

    return ageDistributionData[age];
}

function findObjectByKey(array, key, value) {
    var results = new Array();

    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            results.push(array[i]);
        }
    }
    return results;
}

function clearArray() {
    data.length = 0;
}

function applyCirculatoryAndRespiratoryStatistics() {

}