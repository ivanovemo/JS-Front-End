function solve(words, template) {
    words = words.split(', ');
    template = template.split(' ');

    for (let i = 0; i < template.length; i++) {
        for (let word of words) {
            if (template[i].includes('*') && template[i].length === word.length) {
                template[i] = word
            }
        }
    }

    console.log(template.join(' '))
}

solve('great',
'softuni is ***** place for learning new programming languages')

// solve('great, learning',
// 'softuni is ***** place for ******** new programming languages')