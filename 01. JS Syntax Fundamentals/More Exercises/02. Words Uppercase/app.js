function wordsUpperCase (sentence) {
    const regEx = /[A-Za-z0-9]+/gm;
    const words = sentence.match(regEx)
    
     console.log(`${words.join(', ').toUpperCase()}`)
}

wordsUpperCase('Hi, how are you?')