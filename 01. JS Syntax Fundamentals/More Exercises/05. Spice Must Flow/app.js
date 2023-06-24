function extractFromSource(source) {
    let days = 0;
    let extractedSpice = 0;

    while (source >= 100) {
        days += 1;
        extractedSpice += source - 26;
        source -= 10;
    }

    if (extractedSpice >= 10) {
        extractedSpice -= 26;
    } else {
        extractedSpice = 0;
    }

    console.log(`${days}`)
    console.log(`${extractedSpice}`)
}

extractFromSource(111)
extractFromSource(450)