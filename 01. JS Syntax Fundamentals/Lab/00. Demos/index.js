const name = 'Emo1';

console.log(name);

function printName(name) {
    console.log(name)
}

printName('Emo2')

function multiplyNumber(number) {
    console.log(number * 2);

}

multiplyNumber(2)

function printStudentDetails(name, age, averageGrade) {
    console.log(`Name: ${name}, Age: ${age}, Average Grade: ${averageGrade.toFixed(2)}`);
}

printStudentDetails('Emo', 25, 5.989);

function printName(name) {
    let nameToPrint = name;

    if (!nameToPrint) {
        nameToPrint = "user";
    }

    console.log(`Hey, ${nameToPrint}!`)
}

printName("Emo");

function solve(num) {
    if (num < 1 || num > 12) {
        console.log("Error");
    } else {
        switch (num) {
            case 1:
                console.log("January");
                break;
            case 2:
                console.log("February");
                break;
            case 3:
                console.log("March");
                break;
            case 4:
                console.log("April");
                break;
            case 5:
                console.log("May");
                break;
            case 6:
                console.log("June");
                break;
            case 7:
                console.log("July");
                break;
            case 8:
                console.log("August");
                break;
            case 9:
                console.log("September");
                break;
            case 10:
                console.log("Octomber");
                break;
            case 11:
                console.log("November");
                break;
            case 12:
                console.log("December");
                break;
            default:
                console.log("Error!")
                break;
        }
    }
}

solve(12);
solve(-1);
solve(13);

function mathOperation(num1, num2, operation) {
    let result = 0;

    switch(operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
    }

    console.log(result);
}

mathOperation(1, 2, "+");
mathOperation(2, 1, "-");

const arr = [1, 2, 3, 4, 5];

const [first, ...rest] = arr;

console.log(first);
console.log(rest);

function solve(...input) {
    console.log(input);
}

solve(1, 2, 3, 4, 5, 10, 69 )

function biggestNumber(...input) {
    const heighestNumber = input.sort(function(a, b) {
        return b - a;
    })[0];
    

    console.log(heighestNumber);
}

biggestNumber(1, 4, 2, 6, 10, 9, 7, 11, 100, 50);

const currentUser = 'Emo ';

const activeUsers = ['John', 'Emo', 'Kim'];

const isUserActive = activeUsers.includes(currentUser);

console.log(isUserActive);

console.log(activeUsers.indexOf('Kim')); // returns -1 if user not found

const activeUsersGreetings = activeUsers.map(function(user) {
    return `Hi, ${user}`;
})

console.log(activeUsersGreetings);

const upperCaseNames = activeUsers.map(function (user) {
    return user.toUpperCase();
})

console.log(upperCaseNames);

const domain = ["example.com", 'softuni.com'];

const filteredDomains = domain.map(function (domain) {
    return domain.replace(".com", ".bg")
;})

console.log(filteredDomains);

const filteredDomains2 = domain.filter(function (domain) {
    return domain.includes(".com");
})

console.log(filteredDomains2);

function sumFirstAndLastElement(arr) {
    const first = arr[0];
    const last = arr[arr.length - 1];
    console.log(first + last);
}

sumFirstAndLastElement([10, 17, 22, 33])

function reverseArray(count, arr) {
    let resultArray = arr.slice(0, count).reverse().join(' ');

    console.log(resultArray);
}

reverseArray(3, [10, 20, 30, 40, 50]);



function calculateDifferenceBetweenOddAndEven(arr) {
    let sumOdd = 0;
    let sumEven = 0;

    arr.forEach(function(element) {
        if (element % 2 === 0) {
            sumEven += element
        } else {
            sumOdd += element;
        }
    });

    console.log(sumEven - sumOdd);
}

calculateDifferenceBetweenOddAndEven([1, 2, 3, 4, 5, 6])

function getSubstring(text, startIndex, endIndex) {
    const subString = text.substr(startIndex, endIndex);
}  

function censoredWords(text, word) {
    const censorshipWord = "*".repeat(word.length);

    while(text.includes(word)) {
        text = text.replace(word, censorshipWord);
    }
    console.log(text);
}

censoredWords("A small sentence with some small words", "small");

function countOccurences(text, word) {
     const occurences = text.split(" ").filter(function(element) {
        return element === word;
     }).length;

     console.log(occurences);
}

countOccurences("This is a word and it also is a sentence", "is");

for (var i = 0; i <= 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, i * 1000);
}