// Returns an encrypted or decrypted message using a Caesar cipher.
function caesarCipher(message, key) {

    if (typeof message !== "string"){
        throw new TypeError(`${message} is not a string`)
    }

    if (!Number.isInteger(key)){
        throw new TypeError(`${key} is not an integer`)
    }

    if (key < -25 || key > 25){
        throw new RangeError(`${key} not in range`)
    }

    // Make negative keys positive
    if (key < 0) {
        key += 26;
    }

    message = message.toUpperCase();
    let newMessage = "";
    for (let i = 0; i < message.length; i++) {
        let code = message.charCodeAt(i);

        // Only convert letters
        if (code >= 65 && code <= 90) {
            code = ((code - 65 + key) % 26) + 65;
        }

        newMessage += String.fromCharCode(code);
    }
    return newMessage;
}

let message = "Hello hows it going";

try{
    message = caesarCipher(message, -26);
    console.log(message);
} catch (e){
    console.log(e)
}

// Encrypt the message


// Decrypt the message
// message = caesarCipher(message, -3);
// console.log(message);
