/* THINGS TO DO */

//consts with possibles characters
//function randomizing possible characters/outputting a randomized password according to a password length

const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allTheLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const specialChars = "!@#$%^&*()_-";
const everything = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_-"

function generatePassword(passwordLength, string){
    let finalPassword = '';
    for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * string.length);
        finalPassword += string.charAt(randomNumber);
    }
    return finalPassword;
}

const yourPassword = generatePassword(10, everything);
console.log(`Your random password is: ${yourPassword}`);

