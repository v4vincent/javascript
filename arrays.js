

let array1 = [1,2,3,4,5];
array1[0] = 2;
console.log(array1[0]);
function printArray(){
    for (let i = 0; i < array1.length; i++){
        console.log(array1[i]);
    }
}
printArray();


function printFriendArray(){
    let friends = ["Vincent", "Nicole", "Eliza", "Alex"]
    return friends;
}
console.log(printFriendArray())

let teams = ["Tigers", "Bisons",
    "Eagles", "Cobras"];

console.log(teams[1]);

let names = [];
names[0] = "Sue";
names[1] = "Bob";
names[2] = "Jeff";
console.log(names[0] + names[1]);

let array2 = [0,1,2,3,4,5];

array2.pop(); //Removes the last array element and returns the element
console.log(array2);

array2.push(1); //Adds a value to the end of the array
console.log(array2);

array2.shift() //Removes the first array element and returns the element
console.log(array2.shift());
console.log(array2);

function arraySample(){
    let array3 = [0,1,2,3,4];
    console.log(array3);

    array3.unshift(5); //Adds a value to the beginning of the array
    return array3.shift();
}
console.log(arraySample())


function spliceItUp(){
    let array4 = ["Jan", "March", "April", "May", "June"]
    array4.splice(1,3,"Feb")
    console.log(array4)
}

spliceItUp();

/*
* The six individuals in the line array are waiting in line. Write the JavaScript code to add or remove elements to/from the array to simulate the following events:

The person at the front of the line (index 0) leaves the line (shift).
The person at the end of the line cuts in front of the person at the front of the line (pop and unshift).
Two new people named "Poe" and "Snoke" cut into line behind the second person in line (splice).
The fifth person in line leaves the line (splice).
A new person named "Han" enters the back of the line (push).
Finally, display the contents of the line array to view the new line occupants. A correct solution will show: Leia, Finn, Poe, Snoke, Maz, Han.
*
* */

// People waiting in line (Kylo is in front, Leia at the end)
let line = ["Kylo", "Finn", "Rey", "Maz", "Leia"];

line.shift();
line.pop();
line.unshift("Leia");
line.splice(2,0,"Poe","Snoke");
line.splice(4,1);
line.push("Han");

// Show entire line
console.log(line);