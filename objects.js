let friends={
    school: ["Emily", "Stephanie", "Promyse"],
    john1010: ["Alex", "Eliza", "Muhun,", "Jonathan"],
    family: {
        young: "Vincent",
        old: "Maria"
    }
}

console.log(friends.school[1])
console.log(friends.family.old);

console.log(friends.family.young);

friends.family.young = "Nicole";
console.log(friends.family.young);

friends.linkedIn = "Anon1";

console.log(friends.linkedIn);

friends.john1010.splice(2,1,"Nathalie");
console.log(friends.john1010);