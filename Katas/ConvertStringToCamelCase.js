/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing.
The first word within the output should be capitalized only if the original word was capitalized
(known as Upper Camel Case, also often referred to as Pascal case).
Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

function toCamelCase(str) {
    let arrayHyphen = str.split('-');
    let arrayUnderscore = str.split('_');
    let array = [];
    let resultArray = [];
    if (arrayHyphen.length > arrayUnderscore.length) {
        array = arrayHyphen;
    } else if (arrayHyphen.length < arrayUnderscore.length) {
        array = arrayUnderscore;
    }
    for (var x = 0; x < array.length; x++) {
        if (x === 0) {
            resultArray.push(array[x].charAt(0) + array[x].slice(1));
        }
        else {
            resultArray.push(array[x].charAt(0).toUpperCase() + array[x].slice(1));
        }
    }
    return resultArray.join('');
}

console.log(toCamelCase(''), '')
console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior")
console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior")
console.log(toCamelCase("A-B-C"), "ABC")

