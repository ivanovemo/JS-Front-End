function solve(...nums) {
    const largestNumber = nums.sort(function(a, b) {
        return b - a;
    })[0];

    console.log(`The largest number is ${largestNumber}.`);
}

solve(1, 10, 100);