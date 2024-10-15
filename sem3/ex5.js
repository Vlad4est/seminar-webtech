/**
 completează corpul funcției astfel încât să cenzurezi cuvintele din lista censoredWords care apar în 
 string-ul phrase
 exemplu: javascript is w*******l
 */
 const censor = (phrase, censoredWords) => {
    words = phrase.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (censoredWords.includes(words[i])) {
            words[i] = words[i][0] + "*".repeat(words[i].length - 2) + words[i][words[i].length - 1];

        }
    }
    return words.join(" ");
 };
 
 console.log(censor('javascript is wonderful', ['wonderful']));