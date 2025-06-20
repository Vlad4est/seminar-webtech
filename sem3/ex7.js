// completează corpul funcției astfel încât să obții un string rezultat din 
// adăugarea token-urilor primite ca parametru în cadrul string-ului primit ca parametru
// in funcție de poziție
const formatString = (string, ...tokens) => {
    let cont = 0;
    for(let token of tokens) {
        string = string.replace(`{${cont++}}`, token);
    }
    return string;
};

console.log(formatString('this is a {0} string and we\'ve {1} it', 'nice', 'modified'));
// 'this is a nice string and we've modified it'