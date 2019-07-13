function assignDoB(data) {
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    for (let i in data) {
        let day = Math.floor(Math.random() * currentDay) + 1;
        let month = Math.floor(Math.random() * currentMonth) + 1;
        let year = currentYear - data[i].age;

        if (day < 10) {
            day = "0" + day;
        }

        if (month < 10) {
            month = "0" + month;
        }

        data[i].DoB = day + "/" + month + "/" + year;
    }
}