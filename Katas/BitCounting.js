/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary
representation of that number. You can guarantee that input is non-negative.
Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

var countBits = function (n) {
    let bits = 0;
    while (n >= 1) {
        if (n % 2 === 1) {
            bits++;
            n = (n - 1) / 2;
        } else if (n % 2 === 0) {
            n = n / 2;
        }
    }
    return bits;
};

for (i = 0; i < 100; i++) {
    console.log(countBits(i), "-", i);
}
