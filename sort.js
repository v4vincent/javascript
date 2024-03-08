
let num = [45,1,23,100,2,200,3,300]
console.log(num.sort());

//ascending
console.log(num.sort(function(a, b) {
    return a - b;
}))


//descending
let totals = [99, 4, 250, 38];
totals.sort(function(a, b) {
    return b - a;
});
console.log(totals);