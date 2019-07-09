function genderDistribution(data, age) {
    let counter = 0;
    let numberOfFemales = 0;
    let i = 0;
    let j = 0;

    if (age <= 89) {
        for (i in data) {
            if (data[i].age === age) {
                counter++;
            }
        }

        let numberOfFemalesTarget = Math.round(counter * (femaleDistribution(age) / 100));
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
    let femaleDistributionData = [
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