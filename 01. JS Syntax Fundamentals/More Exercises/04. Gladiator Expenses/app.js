function fix(losts, helmet, sword, shield, armor) {
    let shieldCount = 0;
    let totalExpenses = 0;

    for (let i = 1; i <= losts; i++) {
        if (i % 2 === 0) {
            totalExpenses += helmet;
        } if (i % 3 === 0) {
            totalExpenses += sword;
        } if (i % 6 === 0) {
            shieldCount++;
            totalExpenses += shield;
            if (shieldCount === 2) {
                totalExpenses += armor;
                shieldCount = 0;
            }
        }
    }
    
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`)
}

fix(7, 2, 3, 4, 5)
fix(23,
    12.50,
    21.50,
    40,
    200)