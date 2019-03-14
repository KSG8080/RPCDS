document.getElementById("simulateBtn").addEventListener("click", function(){
    simulate();
    simulateCondition();
});

var population = 1000;
var data = [];

function simulate() {
    localStorage.clear();
    clearArray();
    createPopulation();

    for (var each in data) {
        genderDistribution(data[each].age);
    }

    assignFirstName();
    assignSecondName();
    assignPostcode();

    storeData();
}

function createPopulation() {
    for (var age = 0; age <= 89; age++) {
        var peopleWithAge = Math.round(population * ((ageDistribution(age) - 0.05) / 100));
        for (var i = 0; i < peopleWithAge; i++) {
            data.push(createPerson(age))
        }
    }

    var peopleWithAge90Plus = Math.round(population * ((ageDistribution(90) - 0.05) / 100));
    for (var k = 0; k < peopleWithAge90Plus; k++) {
        var randomAge90Plus = Math.floor((Math.random() * 20) + 90);
        data.push(createPerson(randomAge90Plus));
    }

    if(data.length < population) {
        var toSimulate = population - data.length;

        for (var j = 0; j < toSimulate; j++) {
            var randomAge = Math.floor((Math.random() * 90));
            data.push(createPerson(randomAge))
        }
    }
}

function createPerson(age) {
    var person = {};

    person.firstName = "";
    person.secondName = "";
    person.gender = "M";
    person.age = age;
    person.DoB = 000000;
    person.postcode = "";
    person.CHINumber = 0;
    person.BMI = 0;
    person.CaR = "N";

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
    var results = [];

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

function storeData() {
    var JSONData = JSON.stringify(data);
    localStorage.setItem('StoredData', JSONData);
}

function genderDistribution(age) {
    var counter = 0;
    var numberOfFemales = 0;
    var i = 0;
    var j = 0;

    if (age <= 89) {
        for (i in data) {
            if (data[i].age === age) {
                counter++;
            }
        }

        var numberOfFemalesTarget = Math.round(counter * (femaleDistribution(age) / 100));
        for (j in data) {
            if (data[j].age === age) {
                if (numberOfFemales !== numberOfFemalesTarget) {
                    data[j].gender = "F";
                    numberOfFemales++;
                }
            }
        }
    }
}

function femaleDistribution(age) {
    var femaleDistributionData = [
        48.37,
        48.26,
        48.66,
        48.58,
        48.89,
        48.56,
        48.82,
        49.09,
        49.17,
        49.14,
        48.81,
        49.07,
        48.53,
        48.51,
        48.94,
        49.01,
        49.10,
        48.41,
        48.65,
        49.21,
        49.39,
        49.39,
        49.68,
        49.85,
        50.46,
        50.38,
        49.93,
        49.97,
        50.18,
        50.52,
        50.74,
        50.34,
        51.06,
        51.02,
        51.15,
        51.46,
        50.98,
        50.88,
        50.34,
        51.20,
        50.33,
        50.97,
        51.44,
        50.83,
        51.07,
        51.62,
        52.04,
        51.87,
        51.82,
        51.83,
        51.23,
        51.62,
        51.36,
        51.79,
        51.55,
        51.11,
        51.26,
        51.08,
        51.51,
        51.45,
        51.26,
        51.29,
        51.55,
        51.35,
        51.51,
        51.56,
        51.77,
        51.55,
        51.67,
        51.90,
        52.18,
        52.24,
        53.09,
        52.91,
        54.24,
        54.85,
        55.60,
        55.57,
        55.88,
        56.16,
        57.81,
        58.12,
        58.41,
        59.60,
        59.73,
        61.35,
        62.23,
        63.84,
        64.33,
        66.14,
        70.31
    ];

    return femaleDistributionData[age];
}

function assignFirstName() {
    var maleName = ["Allen","Bob","Carlton",
        "David","Ernie","Foster",
        "George","Howard","Ian",
        "Jeffery","Kenneth","Lawrence",
        "Michael","Nathen","Orson",
        "Peter","Quinten","Reginald",
        "Stephen","Thomas","Morris",
        "Victor","Walter","Xavier",
        "Charles","Anthony","Gordon",
        "Percy","Conrad","Quincey",
        "Armand","Jamal","Andrew",
        "Matthew","Mark","Gerald"];

    var femaleName = ["Alice","Bonnie","Cassie",
        "Donna","Ethel","Grace",
        "Heather","Jan","Katherine",
        "Julie","Marcia","Patricia",
        "Mabel","Jennifer","Dorthey",
        "Mary Ellen","Jacki","Jean",
        "Betty","Diane","Annette",
        "Dawn","Jody","Karen",
        "Mary Jane","Shannon","Stephanie",
        "Kathleen","Emily","Tiffany",
        "Angela","Christine","Debbie",
        "Karla","Sandy","Marilyn",
        "Brenda","Hayley","Linda"];

    for (var i in data) {
        if (data[i].gender === 'M') {
            var randomMaleName = Math.floor(Math.random() * maleName.length);
            data[i].firstName = maleName[randomMaleName];
        } else if (data[i].gender === 'F') {
            var randomFemaleName = Math.floor(Math.random() * femaleName.length);
            data[i].firstName = femaleName[randomFemaleName];
        }
    }
}

function assignSecondName() {
    var secondName = ["Adams","Bowden","Conway",
        "Darden","Edwards","Flynn",
        "Gilliam","Holiday","Ingram",
        "Johnson","Kraemer","Hunter",
        "McDonald","Nichols","Pierce",
        "Sawyer","Saunders","Schmidt",
        "Schroeder","Smith","Douglas",
        "Ward","Watson","Williams",
        "Winters","Yeager","Ford",
        "Forman","Dixon","Clark",
        "Churchill","Brown","Blum",
        "Anderson","Black","Cavenaugh",
        "Hampton","Jenkins","Prichard"];

    for (var i in data) {
        var randomSurname = Math.floor(Math.random() * secondName.length);
        data[i].secondName = secondName[randomSurname];
    }
}

function assignPostcode() {
    var postcode = ["AB1", "AB2", "AB23", "AB3", "AB30", "AB31", "AB32", "AB33",
        "AB34", "AB35", "AB36", "AB41", "AB42", "AB43", "AB44", "AB45", "AB51",
        "AB52", "AB53", "AB54", "AB55", "DD10", "DD9", "DD10", "DD11", "DD2", "DD3",
        "DD4", "DD5", "DD7", "DD8", "DD9", "PH11", "PH12", "FK17", "G82", "G83",
        "G84", "PA20", "PA21", "PA22", "PA23", "PA24", "PA25", "PA26", "PA27", "PA28",
        "PA29", "PA30", "PA31", "PA32", "PA33", "PA34", "PA35", "PA36", "PA37", "PA38",
        "PA41", "PA42", "PA43", "PA44", "PA45", "PA46", "PA47", "PA48", "PA49", "PA60",
        "PA61", "PA62", "PA63", "PA64", "PA65", "PA66", "PA67", "PA68", "PA70", "PA71",
        "PA72", "PA73", "PA74", "PA75", "PA76", "PA77", "PA78", "DG7", "KA1", "KA10",
        "KA11", "KA12", "KA13", "KA14", "KA15", "KA16", "KA17", "KA18", "KA19", "KA2",
        "KA20", "KA21", "KA22", "KA23", "KA24", "KA25", "KA26", "KA27", "KA28", "KA29",
        "KA3", "KA30", "KA4", "KA5", "KA6", "KA7", "KA8", "KA9", "PA17", "FK10", "FK11",
        "FK12", "FK13", "FK14", "DG1", "DG10", "DG11", "DG12", "DG13", "DG14", "DG16", "DG2",
        "DG3", "DG4", "DG5", "DG6", "DG7", "DG8", "DG9", "KA6", "ML12", "G60", "G61",
        "G62", "G64", "G65", "G66", "G81", "G82", "G83", "DD1", "DD2", "DD3", "DD5",
        "EH21", "EH22", "EH31", "EH32", "EH33", "EH34", "EH35", "EH36", "EH39", "EH40",
        "EH41", "EH42", "TD13", "EH1", "EH10", "EH12", "EH13", "EH14", "EH15", "EH16",
        "EH17", "EH2", "EH20", "EH21", "EH28", "EH29", "EH3", "EH30", "EH4", "EH5",
        "EH6", "EH7", "EH8", "EH9", "FK1", "FK10", "FK11", "FK12", "FK13", "FK14", "FK15",
        "FK16", "FK17", "FK18", "FK19", "FK2", "FK20", "FK21", "FK3", "FK4", "FK5", "FK6",
        "FK7", "FK8", "FK9", "DD6", "FK10", "KY1", "KY10", "KY11", "KY12", "KY13", "KY14",
        "KY15", "KY16", "KY2", "KY3", "KY4", "KY5", "KY6", "KY7", "KY8", "KY9", "G1", "G11",
        "G12", "G14", "G15", "G2", "G20", "G21", "G32", "G40", "G41", "G42", "G43", "G45",
        "G51", "G53", "G76", "AB37", "IV1", "IV10", "IV11", "IV12", "IV13", "IV14", "IV15",
        "IV16", "IV17", "IV18", "IV19", "IV2", "IV20", "IV21", "IV22", "IV23", "IV24", "IV25",
        "IV26", "IV27", "IV28", "IV3", "IV4", "IV40", "IV41", "IV42", "IV43", "IV44", "IV45",
        "IV46", "IV47", "IV48", "IV49", "IV5", "IV51", "IV52", "IV53", "IV54", "IV55", "IV56",
        "IV6", "IV7", "IV8", "IV9", "KW1", "KW10", "KW11", "KW12", "KW13", "KW14", "KW2", "KW3",
        "KW5", "KW6", "KW7", "KW8", "KW9", "PA34", "PA38", "PA39", "PA40", "PH19", "PH20", "PH21",
        "PH22", "PH23", "PH24", "PH25", "PH26", "PH30", "PH31", "PH32", "PH33", "PH34", "PH35",
        "PH36", "PH37", "PH38", "PH39", "PH40", "PH41", "PH42", "PH43", "PH44", "PA10", "PA11",
        "PA13", "PA14", "PA15", "PA16", "PA18", "PA19", "EH46", "EH55", "G33", "G65", "G66", "G67",
        "G68", "G69", "G71", "G72", "G73", "G74", "G75", "ML1", "ML10", "ML11", "ML12", "ML2", "ML3",
        "ML4", "ML5", "ML6", "ML7", "ML8", "ML9", "EH10", "EH18", "EH19", "EH20", "EH22", "EH23", "EH24",
        "EH25", "EH26", "EH37", "EH46", "AB37", "AB38", "AB56", "IV30", "IV31", "IV32", "IV36", "PH26",
        "KW1", "KW15", "KW16", "KW17", "DD2", "FK14", "FK15", "FK19", "FK21", "KY13", "PH1", "PH10",
        "PH11", "PH12", "PH13", "PH14", "PH15", "PH16", "PH17", "PH18", "PH2", "PH3", "PH4", "PH5", "PH6",
        "PH7", "PH8", "PH9", "G46", "G77", "G78", "PA1", "PA10", "PA11", "PA12", "PA14", "PA3", "PA4",
        "PA5", "PA6", "PA7", "PA8", "PA9", "EH26", "EH38", "EH43", "EH44", "EH45", "EH46", "ML12", "TD1",
        "TD10", "TD11", "TD12", "TD13", "TD14", "TD15", "TD2", "TD3", "TD4", "TD5", "TD6", "TD7", "TD8",
        "TD9", "ZE1", "ZE2", "ZE3", "FK15", "FK16", "FK17", "FK18", "FK19", "FK20", "FK21", "FK6", "FK7",
        "FK8", "FK9", "G63", "EH27", "EH30", "EH47", "EH48", "EH49", "EH52", "EH53", "EH54", "EH55", "HS1",
        "HS2", "HS3", "HS4", "HS5", "HS6", "HS7", "HS8", "HS9"];

    for (var i in data) {
        var randomPostcode = Math.floor(Math.random() * postcode.length);
        data[i].postcode = postcode[randomPostcode];
    }
}