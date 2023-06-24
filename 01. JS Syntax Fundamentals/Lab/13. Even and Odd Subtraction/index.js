function solve(arr) {
    let sumEven = 0;
    let sumOdd = 0;

    arr.forEach(number => {
        if (number % 2 === 0) {
            sumEven += number;
        } else if (number % 2 !== 0) {
            sumOdd += number;
        }
    });

    console.log(sumEven - sumOdd);
}

solve([1,2,3,4,5,6])