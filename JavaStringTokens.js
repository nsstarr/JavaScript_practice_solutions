// https://www.hackerrank.com/challenges/java-string-tokens/problem
// Given a string, , matching the regular expression [A-Za-z !,?._'@]+, split the string into tokens. We define a token to be one or more consecutive English alphabetic letters. Then, print the number of tokens, followed by each token on a new line.

const printTokens = (str) => {
    const specialCharacters = new Set (['!', ',','?','.','_', '\'', '@']);

    let strWithoutCharacters = str.split('').map(letter => {
     if(specialCharacters.has(letter)){
        return ' '
     }else {
        return letter
     }
    }).join('')

    const tokens = strWithoutCharacters
        .split(' ')
        .filter((token) => token !== '');
    console.log(tokens.length)
    tokens.forEach(token => console.log(token))

}

printTokens("He is a very very good boy, isn't he?")