function solve(names) {
    let sortedNames = names.sort(function (a, b) {
        return a.localeCompare(b);
    });

    for (let i = 0; i < sortedNames.length; i++) {
        console.log(`${i + 1}.${sortedNames[i]}`)
    }
}

solve(["John",
"Bob",
"Christina",
"Ema"])