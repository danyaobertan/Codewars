/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
    num = num.toString().split("")
    console.log(num)
    let numFullForm = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== 0) {
            numFullForm.push(num[num.length-1-i]*(10**i))
        }
    }
    numFullForm = numFullForm.filter(number => number >0);
    return numFullForm.reverse().join(" + ")
}

console.log(expandedForm([70304]))