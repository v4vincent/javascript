// Code will be tested with different roles and movies
let movie = {
    title: "Interstellar",
    director: "Christopher Nolan",
    composer: "Hans Zimmer",
    roles: [ // Roles are stored in order of appearance
        "Cooper",
        "Brand",
        "Murph",
        "Mann",
        "Young Murph"
    ],
    orderOfAppearance: function(role) {

        /* Your solution goes here */
        for (let i = 0; i <= movie.roles.length - 1; i++){
            if (role === movie.roles[i]){
                return i + 1;
            }
        }
        return 10;

    }
};

console.log(movie.orderOfAppearance("Young Murph"));