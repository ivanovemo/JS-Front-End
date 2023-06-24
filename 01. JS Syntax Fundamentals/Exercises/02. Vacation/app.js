function solve(count, type, day) {
    const prices = {
        Students: {
            Friday: 8.45,
            Saturday: 9.8,
            Sunday: 10.46
        },
        Business: {
            Friday: 10.90,
            Saturday: 15.60,
            Sunday: 16
        },
        Regular: {
            Friday: 15,
            Saturday: 20,
            Sunday: 22.50
        }
    }

    let sum = 0;
    const cost = prices[type][day]
    sum = count * cost;
    if (type === "Students" && count >= 30) {
        sum -= sum * 0.15;
    } else if (type === "Business" && count >= 100) {
        sum -= 10 * cost;
    } else if (type === "Regular" && count >= 10 && count <= 20) {
        sum -= sum * 0.05;
    }

    console.log(`Total price: ${sum.toFixed(2)}`)
}

solve(30, "Students", "Sunday")
solve(40, "Regular", "Saturday")