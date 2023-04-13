"use strict";

window.addEventListener("load", initApp);

// ========== Global Variables ========== //

const names = [
    "Peter",
    "Magdalena",
    "Frederikke",
    "Oskar",
    "Rasmus",
    "Sofie",
    "Anders",
    "Birgitte"
];



const years = [2003, 2032, 1990, 1966, 1998, 1989, 1975, 2023, 1933];

const teachers = [
    {
        name: "Magdalena Maria Otap",
        mail: "mago@kea.dk",
        phone: "77880000",
        title: "Lecturer",
        age: 36,
        image: "https://share.cederdorff.com/images/mago.jpg"
    },
    {
        name: "Birgitte Jensen",
        mail: "birgitte@mail.dk",
        phone: "77226010",
        title: "Senior Lecturer",
        age: 49,
        image: "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921541630000&format=webp"
    },
    {
        name: "Dan Nielsen",
        mail: "dan@mail.dk",
        phone: "77226027",
        title: "Lecturer",
        age: 36,
        image: "https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921559630000&format=webp"
    },
    {
        name: "Rasmus Cederdorff",
        mail: "race@kea.dk",
        phone: "72286318",
        title: "Senior Lecturer",
        age: 33,
        image: "https://share.cederdorff.com/images/race.jpg"
    },
    {
        name: "Martin Hansen",
        mail: "martin@mail.dk",
        phone: "77886620",
        title: "Lecturer",
        age: 34,
        image: "https://www.eaaa.dk/media/oayjq02h/martin-n%C3%B8hr.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921658800000&format=webp"
    },
    {
        name: "Peter Lind",
        mail: "petl@kea.dk",
        phone: "77886699",
        title: "Senior Lecturer",
        age: 46,
        image: "https://share.cederdorff.com/images/petl.jpg"
    }
];

const teacher = {
    name: "Peter Lind",
    mail: "petl@kea.dk",
    phone: "77886699",
    title: "Senior Lecturer",
    age: 46,
    image: "https://share.cederdorff.com/images/petl.jpg"
};

// ========== initApp ========== //

function initApp() {
    names.forEach(loopThroughNames);
    console.log("initApp: app.js is running 🎉");
    loopThroughFiveFirstYears();
    logNumbers();
    teachersOver40();
    forOfSearchTeachersByName("Pet");
    forInTeacher();
    whileTeachersIsLecturer();
    whileSearchByName("sen");
}


function loopThroughNames(name, index){
    if (index === 0) {
        console.log("Dette er første element");
    }
    if (index === names.length-1) {
        console.log("Dette er sidste element");
    }
    if (index % 2 === 1) {
        console.log("Hver anden.");
    }


    console.log(name);
    console.log(index);
}


function sommomo() {
    for (let index = 0; index < names.length; index++) {
		const name = names[index];
		console.log(name);
}
}

function loopThroughYears() {
    for (let index = 0; index < years.length; index++) {
        console.log( years[index]);
        if (years[index] === 2023){
            console.log("This is the current year");
        }
    }
}

function loopThroughFiveFirstYears() {
    for (let index = 0; index < 5; index++) {
        console.log( years[index]);
    }
}

function loopThroughFiveLastYears() {
    for (let index = years.length-5; index < years.length; index++) {
        console.log( years[index]);
}
}

function logNumbers() {
    for (let i = 100; i >= 0; i-=10) {
        console.log(i);
    }
}

function loopThroughTeachers() {
    for (const t of teachers) {
        console.log(t);
    }
}

function teachersOver40() {
    const results = [];
    for (const t of teachers) {
        if (t.age >= 40) {
            results.push(t);
            console.log(results);
        }
    }
}

function forOfSearchTeachersByName(searchValue) {
    const results = [];
    for (const n of teachers) {
        if (n.name.includes(searchValue)) {
            results.push(n);
            console.log(results);
        }
    }
}

function forInTeacher() {
    for (const key in teacher) {
        console.log(teacher[key]);
    }
}

function whileTeachersLength() {
    let index = 0;
    while (index < teachers.length) {
        const name = teachers[index];
        console.log(name);
        index++;
    }
}

function whileTeachersIsLecturer() {
    let index = 0;
    while (index < teachers.length) {
        const name = teachers[index];
        if (name.title == "Lecturer") {
        console.log(name);
        }
        index++;
    }
}
// ========== forEach ========== //

// ========== for loop ========== //

// ========== for of loop ========== //

// ========== for in loop ========== //

// ========== while loops ========== //

function whileSearchByName(searchValue) {
    searchValue = searchValue.toLowerCase();
    const results = [];
    
    console.log(searchValue);
    let index = 0;

    while (index < teachers.length) {
        const teacher = teachers[index];
        const name = teacher.name.toLowerCase();
        if (teacher.name.includes(searchValue)) {
            results.push(teacher);
        }
    index++;
    console.log(results);
    }
}

// ========== Filter items: array.filter(...) ========== //

// ========== Sorting: array.sort() ========== //
