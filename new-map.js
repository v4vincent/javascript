
let houses = new Map();

houses.set(1,"Copper");
houses.set(2,"Del Valle");
houses.set(3,"West Lake");

console.log(houses.size);
console.log(houses.get(1));

if(houses.has(5)){
    console.log("You have 5 houses")
} else {
    console.log("You have less than 5 houses")
}

houses.delete(3);
console.log(houses);
houses.set(3,"Future");
console.log(houses);

//for of loop used for looping through an array
for (let [number, house] of houses){
    console.log(number + " " + house);
}

let friends = new Map();
friends.set("Eliza",
    {
        Age: 27,
        Height: 87,
        Place: "Austin",
        Car: "Mazda"
    });
friends.set("Alex",
    {
        Age: 27,
        Height: 97,
        Place: "Austin",
        Car: "Toyota"
    });
friends.set("Muhun",
    {
        Age: 25,
        Height: 86,
        Place: "Austin",
    });

console.log(friends);
console.log(friends.get("Alex").Place);
friends.get("Muhun").Car = "Bike";


console.log(friends);


let cast1 = { // Code will be tested with different actors
    "Tom Hanks": "Forrest Gump",
    "Michael Connor Humphreys": "Young Forrest Gump",
    "Robin Wright": "Jenny Curran",
    "Gary Sinise": "Lieutenant Dan Taylor"
};

function roleOf(actorName, cast) {

    /* Your solution goes here */
    console.log(cast[actorName]);

}

// roleOf("Tom Hanks",cast);

// let cast = { // Code will be tested with different actors
//     "Tom Hanks": "Forrest Gump",
//     "Michael Connor Humphreys": "Young Forrest Gump",
//     "Robin Wright": "Jenny Curran",
//     "Gary Sinise": "Lieutenant Dan Taylor"
// };

function deleteFromMovie(actorName, cast) {

    /* Your solution goes here */
    if (actorName in cast){
        delete cast[actorName];
        return "Actor deleted";
    } else {
        return "Not in this cast";
    }
}


let actors2 = new Map(); // Code will be tested with different actors

actors2.set("Orlando Bloom", { movie: "The Lord of the Rings", role: "Legolas" });
actors2.set("Keira Knightley", { movie: "Pirates of the Caribbean", role: "Elizabeth Swann" });
actors2.set("Jessica Chastain", { movie: "Interstellar", role: "Murph" });
actors2.set("Robin Wright", { movie: "Forrest Gump", role: "Jenny Curran" });

function actorInfo(actorName, actors) {

    /* Your solution goes here */
    if (actors.has(actorName)){
        console.log(actorName + " plays " + actors.get(actorName).role + " in " + actors.get(actorName).movie)
    } else {
        console.log("Actor not found");
    }

}

/* Ex: Given the following actors map, output should be:
Number of actors: 2
Actor: Orlando Bloom, Role: Legolas
Actor: Keira Knightley, Role: Elizabeth Swann */

let actors = new Map(); // Code will be tested with different actors

actors.set("Orlando Bloom", { movie: "The Lord of the Rings", role: "Legolas" });
actors.set("Keira Knightley", { movie: "Pirates of the Caribbean", role: "Elizabeth Swann" });

/* Your solution goes here */

console.log("Number of actors: " + actors.size);
for (let [actor,role] of actors){
    console.log("Actor: " + actor + ", Role: " + role.role)
}