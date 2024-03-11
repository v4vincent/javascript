
// let a = 1;
//
// if (a === 1 ){
//     throw "Iz 1";
// }
// console.log("Hello world")

// Returns the average of the numbers in the scores array.
function findAverage(scores) {
    if (scores.length === 0) {
        throw "Must supply at least one score.";
    }

    let sum = 0;
    scores.forEach(function(score) {
        if (!Number.isInteger(score)) {
            throw "Score '" + score + "' is not an integer.";
        }
        if (score < 0) {
            throw "Negative score encountered.";
        }
        sum += score;
    });
    return sum / scores.length;
}

console.log("Average = " + findAverage([90, 85, 71, 93]));
console.log("Average = " + findAverage([76]));

try {
    console.log("Average = " + findAverage([90, -85, 71, 93]));   // Should not accept negative numbers
}
catch (exception) {
    console.log(exception);
}

try {
    console.log("Average = " + findAverage([]));                  // Should not accept empty arrays
}
catch (exception) {
    console.log(exception);
}

try {
    console.log("Average = " + findAverage([60, "cat", 70]));    // Should not accept non-numbers
}
catch (exception) {
    console.log(exception);
}
{}