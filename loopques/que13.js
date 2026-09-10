let n = Number(prompt("Enter a number:"));
n = Math.abs(n);

let sum = 0;

while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
}

console.log("Sum of digits = " + sum);