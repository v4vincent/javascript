
let schools = {
    elementary: ["Bear Creek", "Chelwood", "Barton Spring"],
    highschool: ["Manzano","Bowie"],
    staff: {
        lastname: "Vermillion",
        firstname: "Vincent"
    },
    getStaffName : function (){
        return schools.staff.firstname + " " + schools.staff.lastname;

    }
}
console.log(schools.getStaffName());

schools.getElementary = function (){
    return this.elementary;
}
console.log(schools.getElementary().at(1));

//creating a new object property with a method

schools.insertMiddleSchool = function (middleschool){
    this.middleschool = middleschool;
}
schools.insertMiddleSchool("Jackson Middle");
console.log(schools.middleschool);
console.log(schools);

// Declare a game object and call the game object's methods
let game = {
    winner: {
        name: "John10:10",
        score: 97
    },
    loser: {
        name: "CYA",
        score: 78
    },

    getMarginOfVictory: function(){
        return game.winner.score - game.loser.score;
    }
}

game.showSummary = function(){
    return this.winner.name + ": " + this.winner.score +"\n" + this.loser.name + ": " + game.loser.score
        +"\n" + "Margin of victory: " + this.getMarginOfVictory();
}

console.log(game.getMarginOfVictory());
console.log(game.showSummary());

