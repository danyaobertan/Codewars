/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).
Jaden is also known for some of his philosophy that he delivers via Twitter.
When writing on Twitter, he is known for almost always capitalizing every word.
For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
Your task is to convert strings to how they would be written by Jaden Smith.
The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
Example:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

// String.prototype.toJadenCase = function () {
//     var result = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//           result += str.slice(0, i+1) + str[i + 1].toUpperCase() + str.slice(i+2,str.length)
//         }
//     }
//     return (result);
// };

String.prototype.toJadenCase = function () {
    var array = this.split(' ');
    var resultArray = [];
    for(var x = 0; x < array.length; x++){
        resultArray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
    }
    return resultArray.join(' ');
};


var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase(), "\nHow Can Mirrors Be Real If Our Eyes Aren't Real");
