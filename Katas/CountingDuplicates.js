/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

    Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
 */

function duplicateCount(text) {
    let distinct = [];
    let distinctCount = [];
    let CountDuplicates = 0;
    text = text.toLowerCase();
    for (let i = 0; i < text.length; i++) {
        if (!distinct.includes(text[i])) {
            distinct.push(text[i]);
            distinctCount.push(0)
        }
        distinctCount[distinct.indexOf(text[i])]+=1;
    }
    for (let i = 0; i < distinctCount.length; i++) {
        if (distinctCount[i] > 1) {
            CountDuplicates++;
        }
    }
    return CountDuplicates;
}

console.log(duplicateCount("ABBAA"))