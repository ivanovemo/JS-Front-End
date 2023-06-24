function countOccurences(text, word) {
    const occurences = text.split(" ").filter(function(element) {
       return element === word;
    }).length;

    console.log(occurences);
}

countOccurences("This is a word and it also is a sentence", "is");