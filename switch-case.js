
let age = 10;

switch (1+1){
    case 0:
        console.log("odd");
        break;
    case 2:
        console.log("even");
        break;
}

let currDay = new Date().getDay();
switch (currDay){
case 1:
    console.log("I love Mondays!");
    break;
case 2:
case 3:
case 4:
    console.log("Working hard!");
    break;
case 5:
    console.log("TGIF!");
    break;
default:
    console.log("Time to relax!");
}