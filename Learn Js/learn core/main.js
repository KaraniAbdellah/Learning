// Destructuring Mixed Content

function printInfo({theName: name, theAge: age, skills: [a, , c], adr: {morocco: m}}) {
    console.log(`${name} + ${age} + ${c} + ${m}`);
}

const user = {
    theName: "Abdellah",
    theAge:  20,
    skills: ["HTML", "CSS", "JS "],
    adr: {
        morocco: "Rabat",
        ksa: "Riyadh",
    },
}
printInfo(user);






