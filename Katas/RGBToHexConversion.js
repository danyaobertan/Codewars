/*
The rgb function is incomplete.
Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.
Valid decimal values for RGB are 0 - 255.
Any values that fall out of that range must be rounded to the closest valid value.
Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
The following are examples of expected output values:
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

function rgb(r, g, b) {
    return DecToHex(r).toString() + DecToHex(g).toString() + DecToHex(b).toString();
}

let DecToHex = function (n) {
    let str = '';
    if (n <= 0) {
        return '00'
    }
    if (n >= 255) {
        return 'FF'
    }
    while (n >= 1) {
        if (n % 16 === 15) {
            str = str + "F";
            n = (n - 15) / 16;
        } else if (n % 16 === 14) {
            str = str + "E";
            n = (n - 14) / 16;
        } else if (n % 16 === 13) {
            str = str + "D";
            n = (n - 13) / 16;
        } else if (n % 16 === 12) {
            str = str + "C";
            n = (n - 12) / 16;
        } else if (n % 16 === 11) {
            str = str + "B";
            n = (n - 11) / 16;
        } else if (n % 16 === 10) {
            str = str + "A";
            n = (n - 10) / 16;
        } else if (n % 16 === 9) {
            str = str + "9";
            n = (n - 9) / 16;
        } else if (n % 16 === 8) {
            str = str + "8";
            n = (n - 8) / 16;
        } else if (n % 16 === 7) {
            str = str + "7";
            n = (n - 7) / 16;
        } else if (n % 16 === 6) {
            str = str + "6";
            n = (n - 6) / 16;
        } else if (n % 16 === 5) {
            str = str + "5";
            n = (n - 5) / 16;
        } else if (n % 16 === 4) {
            str = str + "4";
            n = (n - 4) / 16;
        } else if (n % 16 === 3) {
            str = str + "3";
            n = (n - 3) / 16;
        } else if (n % 16 === 2) {
            str = str + "2";
            n = (n - 2) / 16;
        } else if (n % 16 === 1) {
            str = str + "1";
            n = (n - 1) / 16;
        } else if (n % 16 === 0) {
            str = str + "0";
            n = n / 16;
        }
    }
    if (str.length === 1) {
        str = str + '0';
    }
    return str.split("").reverse().join("");
}

console.log(DecToHex(-121), "-", 0);
console.log(DecToHex(0), "-", 0);
console.log(DecToHex(1), "-", 1);
console.log(DecToHex(3), "-", 1);
console.log(DecToHex(4), "-", 1);
console.log(DecToHex(43), "-", 43);
console.log(DecToHex(124), "-", 124);
console.log(DecToHex(222), "-", 222);
console.log(DecToHex(255), "-", 255);
console.log(DecToHex(24535), "-", 255);

console.log(rgb(255, 255, 255))// returns FFFFFF
console.log(rgb(255, 255, 300))// returns FFFFFF
console.log(rgb(0, 0, 0)) // returns 000000
console.log(rgb(148, 0, 211)) // returns 9400D3