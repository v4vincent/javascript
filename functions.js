
function friends(parameter1){
    console.log("My name is " + parameter1);
}

friends("Vincent");

// Convert into a drawBox function
// for (let r = 0; r < 5; r++) {
//     let line = "";
//     for (let c = 0; c < 10; c++) {
//         line += "?";
//     }
//     console.log(line);
// }

function drawBox(numRows, numCols, boxChar){

    for (let r = 0; r < numRows; r++){
        let line = "";
        for (let c = 0; c < numCols; c++){
            line += boxChar;
        }
        console.log(line)
    }
}
drawBox(5,4,"!");

function averageNum(num1, num2, num3){
    let sum = (num1 + num2 + num3);
    return sum / averageNum.length;
}
console.log(averageNum(5,1,8))



function sayHello(name) {
    console.log("Hello, " + name + "!");
    return "wassap";
}

sayHello("Vincent")
console.log(sayHello("Vincent"))

function formatNumber(num) {
    return num.toFixed(7);
}

console.log(formatNumber(3/7));

function findAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
findAverage("hello");