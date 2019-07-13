function assignCHI(data) {
    for (let i in data) {
        let dob = data[i].DoB.split("/")
        let year = dob[2].charAt(2) + "" + dob[2].charAt(3);
        let random1 = Math.floor(Math.random() * 10);
        let random2 = Math.floor(Math.random() * 10);
        let digit = Math.floor(Math.random() * 2);

        data[i].CHINumber = dob[0] + "" + dob[1] + "" + year + "" + random1 + "" + random2 + "" + genderDigit(data, i) + "" + digit;
    }

}

function genderDigit(data, index) {
    let odd = ["1", "3", "5", "7", "9"];
    let even = ["2", "4", "6", "8"];

    if(data[index].gender === "M") {
        return odd[Math.floor(Math.random() * 4)];
    } else if (data[index].gender === "F") {
        return even[Math.floor(Math.random() * 3)];
    }
}