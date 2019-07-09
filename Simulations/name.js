function assignFirstName(data) {
    let maleName = ["Allen","Bob","Carlton",
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

    let femaleName = ["Alice","Bonnie","Cassie",
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

    for (let i in data) {
        if (data[i].gender === 'M') {
            let randomMaleName = Math.floor(Math.random() * maleName.length);
            data[i].firstName = maleName[randomMaleName];
        } else if (data[i].gender === 'F') {
            let randomFemaleName = Math.floor(Math.random() * femaleName.length);
            data[i].firstName = femaleName[randomFemaleName];
        }
    }
}

function assignSecondName(data) {
    let secondName = ["Adams","Bowden","Conway",
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

    for (let i in data) {
        let randomSurname = Math.floor(Math.random() * secondName.length);
        data[i].secondName = secondName[randomSurname];
    }
}