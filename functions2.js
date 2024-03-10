// Code will be tested with a different movie
let movie = {
    title: "Interstellar",
    director: "Christopher Nolan",
    composer: "Hans Zimmer",
    budget: 165000000,
    boxOffice: 675100000,
    awards: [],

    /* Your solution goes here */

    get totalRevenue(){
        return movie.boxOffice - movie.budget;
    },

    set wonAward(name){
        this.awards.push(name);
    }
};

console.log(movie.totalRevenue.toLocaleString())
movie.wonAward = "Grammys";
console.log(movie.awards);