// let i = 10;
//
// while (i > 0){
//     console.log(i);
//     i--;
// }

// do {
//     console.log(i);
//     --i
// } while (i >= 0)
//     console.log(i);
// --i;

let numInsects = 2;
let numWeeks1 = 0;
do {
    numWeeks1++;
    numInsects *=2;

    if (numWeeks1 % 4 === 0){
        numInsects = numInsects - (numInsects * 0.4)
    }

} while (numInsects < 10000);


console.log(numInsects)
console.log(numWeeks1 + 1)

let a  = 12;
if (a % 4 === 0){
    console.log(true)
} else { console.log(false)}

// Part 1
let insectPop = 2;
let numWeeks = 1;
console.log("Week " + numWeeks + ": " + insectPop);

while (insectPop < 10000) {
    insectPop = insectPop * 2;
    numWeeks++;
    console.log("Week " + numWeeks + ": " + insectPop);
}

console.log("In " + numWeeks + " weeks the insect population will exceed 10,000 insects.");
console.log("");

// Part 2
insectPop = 2;
numWeeks = 1;
console.log("Week " + numWeeks + ": " + insectPop);
let numKilled = 0;
do {
    insectPop = insectPop * 2;
    numWeeks++;
    if (numWeeks % 4 === 0) {
        numKilled = insectPop * 0.4;
        insectPop = insectPop - numKilled;
    }
    console.log("Week " + numWeeks + ": " + insectPop);
} while (insectPop < 10000);
console.log("In " + numWeeks + " weeks the insect population will exceed 10,000 insects " +
    "when 40% of the population is killed by disease every 4 weeks.");

let monthlyDeposit = 150; // Code will be tested with values: 150 and 130
let accountBalance = 0;
for (let i = 0; i < 10; i++){
    accountBalance += monthlyDeposit;
}
console.log(accountBalance);