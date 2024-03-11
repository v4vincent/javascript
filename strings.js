console.log("test".charAt(2));

//string.substr(start index, length)
//string.substring(start index, last index - 1)
//string.substring(start index) if no 2nd arg, goes until the last index
//string.split(delimeter " ") returns an array with the delimeter ["As", "you", "wish."]
//string.trim() returns string without leading and trailing whitespace


let greeting = " Welcome Home!     ";
console.log(greeting.substring(9));
console.log(greeting.length);
console.log(greeting[18]);


// Too short
let password = "abc123abc";

// Contains a space
// password = "Contains space";

// Doesn't use a digit
// password = "my-password";

// Repeats first and last 3 chars
// password = "abc123abc";

// Strong password
// password = "StrongPassword1";

// See if function returns an error message or not
let message = testPassword(password);
if (message) {
    console.log(message);
}
else {
    console.log("Password accepted.");
}

function testPassword(password) {

    // return "Password must be at least 6 characters.";
    if (password.length < 5){
        return "Password must be at least 6 characters.";
    }

    // return "Password may not contain a space.";
    if (!(password.indexOf(" ") === -1)){
        return "Password may not contain a space.";
    }

    // return "Password must have at least one digit.";
    let hasNum = false;
    for (let i = 0; i < password.length; i++) {
        if (isSingleDigit(password[i])){
            hasNum = true;
        }
    }
    if (!hasNum){
        return "Password must have at least one digit.";
    }



    // return "The password may not begin and end with the same 3 characters.";
    if (password.substr(0,3) === password.substr(password.length-3)){
        return "The password may not begin and end with the same 3 characters.";
    }

    // Everything is good
    return "";
}

// Returns true if n is a string with a single digit, false otherwise
function isSingleDigit(n) {
    let unicodeValue = n.charCodeAt(0);
    return n.length === 1 && unicodeValue >= 48 && unicodeValue <= 57;
}

testPassword(password);
console.log(password.substring(0,3))
console.log(password.substring(password.length-3))