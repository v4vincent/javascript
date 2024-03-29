console.log(Math.sin(Math.PI / 2))

// rank should be a number between 1 and 13, and suit between 0 and 3.
function displayCard(rank, suit) {
    switch (rank) {
        case 1: rank = "A"; break;
        case 10: rank = "T"; break;
        case 11: rank = "J"; break;
        case 12: rank = "Q"; break;
        case 13: rank = "K"; break;
        default: if (rank < 1 || rank > 13) {
            console.log("Bad rank value: " + rank);
        }
    }

    switch (suit) {
        case 0: suit = "♥"; break;
        case 1: suit = "♦"; break;
        case 2: suit = "♣"; break;
        case 3: suit = "♠"; break;
        default:  console.log("Bad suit value: " + suit);
    }

    console.log("┌─────┐");
    console.log("│" + rank + suit + "   │");
    console.log("│     │");
    console.log("│   " + rank + suit + "│");
    console.log("└─────┘");
}

displayCard(5, 0);   // 5 of Hearts
displayCard(13, 1);  // K of Diamonds
displayCard(1, 2);   // A of Clubs
displayCard(10, 3);  // 10 of Spades

for (let i = 0; i < 10; i++){
    displayCard(Math.round(Math.abs(Math.random()* 10 + 3)), Math.floor(Math.random() * 4) );
}

console.log(Math.round(Math.abs(Math.random()* 10 + 3)))
