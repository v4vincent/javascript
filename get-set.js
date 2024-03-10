let rectangle = {
    width: 5,
    length: 10,
    get area() {
        return this.width * this.length;
    },
    set differentVal(value) {
        this.width = value;
        this.length = value * 2;
    }

}

console.log(rectangle.area)
rectangle.differentVal = 20;
console.log(rectangle.area)

let friends = {
    firstName: "",
    lastName: "",
    set firstName1(firstName) {
        this.firstName = firstName;
    },
    get firstName1() {
        return this.firstName;
    },
    set lastName2(lastName) {
        this.lastName = lastName;
    },
    get lastName2() {
        return this.lastName;
    },
    get fullName() {
        return this.firstName + " " + this.lastName;
    }

}
friends.firstName1 = "Vincent";
console.log(friends.firstName1);
friends.lastName2 = "Vermillion";
console.log(friends.lastName2);
console.log(friends.fullName);

let game = {
    date: "",
    set matchDate(value) {
        this.date = value;
    },
    get matchDate(){
        return this.date;
    }
}


// Wimbledon 2016 women's championship
let champDate = new Date(2016, 5, 9);
game.matchDate = champDate;
console.log(game.matchDate)