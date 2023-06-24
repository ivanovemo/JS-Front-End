function showSpecialWords (text) {
    text = text.split(' ');

    function onlyLettersAndNumbers(txt) {
        return Boolean(txt.match(/#[A-Za-z]/));
    }

    for (const word of text) {
        if (onlyLettersAndNumbers(word)) {
            console.log(word.slice(1, word.length))
        }
    }
}

showSpecialWords('Nowadays everyone uses # to tag a #special word in #socialMedia')