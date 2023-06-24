function solve(day, age) {
    let ticketPrice = 0;
    if (day === "Weekday") {
        if (age >= 0 && age <= 18) {
            ticketPrice = 12;
        } else if (age > 18 && age <= 64) {
            ticketPrice = 18;
        } else if (age > 64 && age <= 122) {
            ticketPrice = 12;
        } else {
            return console.log('Error!')
        }
    } else if (day === "Weekend") {
        if (age >= 0 && age <= 18) {
            ticketPrice = 15;
        } else if (age > 18 && age <= 64) {
            ticketPrice = 20;
        } else if (age > 64 && age <= 122) {
            ticketPrice = 15;
        } else {
            return console.log('Error!')
        }
    } else if (day === 'Holiday') {
        if (age >= 0 && age <= 18) {
            ticketPrice = 5;
        } else if (age > 18 && age <= 64) {
            ticketPrice = 12;
        } else if (age > 64 && age <= 122) {
            ticketPrice = 10;
        } else {
            return console.log('Error!')
        }
    } else {
        return console.log('Error!')
    }

    console.log(ticketPrice + '$');
}

solve ('Weekend', 24);