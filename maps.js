//The for-in loop is ideal for looping through an object map.
// The for-in loop iterates over an object's properties in arbitrary order.

let stateCapitals = {
    AR: "Little Rock",
    CO: "Denver",
    NM: "Sante Fe"
}

for (let capital in stateCapitals) {
    console.log(capital + ": " + stateCapitals[capital])
    console.log(capital.length);
}

let books = {
    tifios: {
        author: "John Green",
        year: 2014
    },
    hungerGames: {
        author: "Suzanne Colins",
        year: 2016
    },
    bible: {
        author: "Holy Spirit",
        year: -1400
    }
}

console.log(books["bible"].author);
console.log(books["bible"].year);
books["tifios"].twitter = "@johngreen";
console.log(books)

books["twilight"] = {
    author: "Stephanie Meyer",
    year: 2017,
    twitter: "@stephmeyer"
}

console.log(books);

for (book in books) {
    console.log(book + ": " + books[book].author)

    if (books[book].twitter === undefined) {
        books[book].twitter = "Unknown";
    }
    console.log(book + ": " + books[book].twitter)
}


