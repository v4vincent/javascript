
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
