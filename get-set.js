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
    get matchDate() {
        return this.date;
    }
}


// Wimbledon 2016 women's championship
let champDate = new Date(2016, 5, 9);
game.matchDate = champDate;
console.log(game.matchDate)

let musicQueue = {
    songs: ["Party Rock Anthem", "I Gotta Feeling", "Macarena"],
    nextSong: 0,
    set next(value){
        if (value > this.songs.length -1 || value  < 0){
            this.nextSong = 0
        } else {
            this.nextSong = value;
        }
    },
    get next(){
        if (this.nextSong > this.songs.length-1){
            this.nextSong = 0;
        }
        if (this.nextSong < 0)
        {
            this.nextSong = 0;
        }
        return this.songs[this.nextSong++];

    },

    // Add getter and setter for next property
};

// Run through the queue three times
for (let c = 0; c < musicQueue.songs.length * 3; c++) {
    console.log("Now playing: " + musicQueue.next);
}

// Test the next setter
musicQueue.next = 2;
console.log(musicQueue.next);   // Macarena
musicQueue.next = 3;
console.log(musicQueue.next);   // Party Rock Anthem
musicQueue.next = -1;
console.log(musicQueue.next);   // Party Rock Anthem
