function checkIfSentenceContainsWord (word, sentence) {
    sentence = sentence.split(' ');

    for (let i = 0; i < sentence.length; i++) { 
        if (sentence[i].toLowerCase() === word.toLowerCase()) {
            console.log(word)
            return
        }
    }

    console.log(`${word} not found!`)
}

checkIfSentenceContainsWord('javascript', 'JavaScript is the best programming language')