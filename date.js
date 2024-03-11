console.log(new Date());

let currDate = new Date();
console.log(currDate.toUTCString())

let day = new Date();
day.setDate(1);
console.log(day.toUTCString());
console.log(day.getTime());

const notablePeople = {
    "Elvis Presley":         new Date(1935, 0, 8),
    "Sonia Sotomayor":       new Date(1954, 5, 25),
    "Franklin D. Roosevelt": new Date(1882, 0, 30),
    "Elon Musk":             new Date(1971, 5, 28),
    "Roger Staubach":        new Date(1942, 1, 5),
    "Steve Jobs":            new Date(1955, 1, 24),
    "Albert Einstein":       new Date(1879, 2, 14),
    "Isaac Asimov":          new Date(1919, 9, 4),
    "Jada Pinkett Smith":    new Date(1971, 8, 18),
    "Grace Hopper":          new Date(1906, 11, 9)
};

// Utility function to compute the rounded number of days difference from a
// time difference in milliseconds
function getDifferenceInDays(timeDifferenceMilliseconds) {
    timeDifferenceMilliseconds = Math.abs(timeDifferenceMilliseconds);
    let daysDifference = timeDifferenceMilliseconds / (1000 * 60 * 60 * 24);

    // Return the difference rounded to the nearest whole day
    return Math.round(daysDifference);
}

for (let people in notablePeople){
    if (notablePeople[people] < notablePeople["Sonia Sotomayor"]){
        console.log(`${people} was born ${ getDifferenceInDays(
            notablePeople["Sonia Sotomayor"].getTime() - notablePeople[people].getTime())} days before Sonia `);
    }
}
console.log()
console.log()

for (let people in notablePeople){
    if (notablePeople[people] > notablePeople["Sonia Sotomayor"]){
        console.log(`${people} was born ${ getDifferenceInDays(
            notablePeople["Sonia Sotomayor"].getTime() - notablePeople[people].getTime())} days after Sonia `);
    }
}

let interestingEvents = {
    // Reminder for month: 0 = Jan, 1 = Feb, 2 = Mar, etc.
    "Long distance telegraph": new Date(1844, 4, 24),
    "First telephone call": new Date(1876, 2, 10),
    "Microsoft founded": new Date(1975, 3, 4),
    "World Wide Web born": new Date(1989, 2, 1),
    "Google founded": new Date(1998, 8, 4),
    "Facebook website launch": new Date(2004, 1, 4)
};
// Code also tested using date of First telephone call
let interestingDate = interestingEvents["Long distance telegraph"];

/* Your solution goes here */

console.log(`${interestingDate.getMonth()+1}-${interestingDate.getDate()}-${interestingDate.getFullYear()}`)

