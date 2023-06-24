function solve(array, number) {
    const newArray = [];
    for (let i = 0; i < array.length; i += number) {
        newArray.push(array[i]);
    }
    return newArray;
}

solve (['5', '20', '31', '4', '20'], 2)