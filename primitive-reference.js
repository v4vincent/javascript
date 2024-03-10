function changeThings(x, y, z) {
    x = 33;
    y.width = 20;
    z.title = { title: "The Hunger Games",
        author: "Suzanne Collins" };
}

let level = 5;
let rectangle = {
    width: 3,
    height: 16
};
let book = {
    title: "Twilight",
    author: "Stephenie Meyer"
};

changeThings(level, rectangle, book);
console.log(level);
console.log(rectangle.width);
console.log(book.title);

