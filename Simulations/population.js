function createPopulation(population, data) {
    for (let age = 0; age <= 89; age++) {
        let peopleWithAge = Math.round(population * ((ageDistribution(age) - 0.05) / 100));
        for (let i = 0; i < peopleWithAge; i++) {
            data.push(createPerson(age))
        }
    }

    let peopleWithAge90Plus = Math.round(population * ((ageDistribution(90) - 0.05) / 100));
    for (let k = 0; k < peopleWithAge90Plus; k++) {
        let randomAge90Plus = Math.floor((Math.random() * 20) + 90);
        data.push(createPerson(randomAge90Plus));
    }

    if(data.length < population) {
        let toSimulate = population - data.length;

        for (let j = 0; j < toSimulate; j++) {
            let randomAge = Math.floor((Math.random() * 90));
            data.push(createPerson(randomAge))
        }
    }
}

function createPerson(age) {
    let person = {};

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