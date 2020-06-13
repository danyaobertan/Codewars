/*
Write Number in Expanded Form - Part 2
This is version 2 of my 'Write Number in Expanded Form' Kata.
You will be given a number and you will need to return it as a string in Expanded Form. For example:
expandedForm(1.24); // should return '1 + 2/10 + 4/100'
expandedForm(7.304); // should return '7 + 3/10 + 4/1000'
expandedForm(0.04); // should return '4/100'
*/

function expandedForm(num) {
    let decimalDigits = num.toString().split('.')[1];
    let decimalPlaces = decimalDigits.length
    let decimalDivider = 10 ** decimalPlaces
    let fractionValue = decimalDigits / decimalDivider
    let integerValue = Math.floor(num - fractionValue)
    let fractionValueArray = fractionValue.toString().split("")
    let integerValueArray = integerValue.toString().split("")
    let fractionNumFullForm = [];
    let integerNumFullForm = [];

    for (let i = 0; i < fractionValueArray.length; i++) {
        if (fractionValueArray[i] !== '0' && fractionValueArray[i] !== '.' && i > 0) {
            fractionNumFullForm.push(fractionValueArray[i].toString() + '/' + (10 ** (i - 1)).toString())
        }
    }
    for (let i = 0; i < integerValueArray.length; i++) {
        if (integerValueArray[i] !== 0) {
            integerNumFullForm.push(integerValueArray[integerValueArray.length - 1 - i] * (10 ** i))
        }
    }
    integerNumFullForm = integerNumFullForm.filter(number => number > 0).reverse();
    if (integerValue === 0) {
        return fractionNumFullForm.join(" + ");
    }
    return (integerNumFullForm.join(" + ")) + ' + ' + (fractionNumFullForm.join(" + "))
}

console.log(expandedForm(32312312.2407));