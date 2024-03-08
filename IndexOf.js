let scores = [80, 92, 75, 64, 88, 92];
for (let i = 0; i < scores.length; i++){

}

console.log(
scores.indexOf(92),         // 1
scores.indexOf(92, 2),      // 5
scores.indexOf(100),        // -1
scores.lastIndexOf(92),     // 5
scores.lastIndexOf(92, 4),  // 1
scores.lastIndexOf(50))     // -1

/*
* The validCredentials() function contains two parallel arrays of usernames
* and passwords. Modify validCredentials() to use the indexOf() method to search
* the usernames array for the given enteredUsername. If the username is found,
* the same location in the passwords array should contain the enteredPassword.
* Return true if the passwords are equal, false otherwise. validCredentials()
* should also return false if the given username was not found.
* */

// Return true if the given username and password are in the database,
// false otherwise.
function validCredentials(enteredUsername, enteredPassword) {

    // Database of usernames and passwords
    let usernames = ["smith",  "tron",      "ace",      "ladyj",    "anon"];
    let passwords = ["qwerty", "EndOfLine", "year1942", "ladyj123", "PASSWORD"];

    // Search the usernames array for enteredUsername
    if (usernames.indexOf(enteredUsername) === -1){
        return false;
    }
    return usernames.indexOf(enteredUsername) === passwords.indexOf(enteredPassword);

    // Only return true if the enteredUsername is in username, and the
    // same location in passwords is enteredPassword
}


console.log("Login for ladyj: " + validCredentials("ladyj", "ladyj123"));  // true
console.log("Login for ace: " + validCredentials("ace", "wrong"));  // false
console.log("Login for jake: " + validCredentials("jake", "???"));  // false
console.log(validCredentials("test","123"));
console.log(validCredentials("smith","qwerty"));
console.log(validCredentials("smith","year1942"));