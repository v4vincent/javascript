let actors = new Map(); // Code will be tested with different actors

actors.set("Orlando Bloom", { movie: "The Lord of the Rings", role: "Legolas" });
actors.set("Keira Knightley", { movie: "Pirates of the Caribbean", role: "Elizabeth Swann" });

/* Your solution goes here */

console.log("Number of actors: " + actors.size);
for (let [actor,role] of actors){
    console.log("Actor: " + actor + ", Role: " + role.role)
}