let n = Number(prompt("Enter a number:"));
n = Math.abs(n);

let count = 0;

if (n === 0) {
    count = 1;
} else {
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
}

console.log("Number of digits = " + count);