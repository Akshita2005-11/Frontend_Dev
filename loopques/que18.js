let n = Number(prompt("Enter how many numbers:"));
let largest = -Infinity;

for (let i = 1; i <= n; i++) {
    let num = Number(prompt("Enter number " + i + ":"));

    if (num > largest) {
        largest = num;
    }
}

console.log("Largest number = " + largest);