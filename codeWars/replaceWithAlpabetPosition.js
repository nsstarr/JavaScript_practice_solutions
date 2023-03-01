// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alpahbetPosition(text) {
    const mappedArray = []
    text
    .trim()
    .toLowerCase()
    .split("")
    .forEach (character => {
        const ascii = character.charCodeAt()
        if (ascii >= 97 && ascii <= 122){
            mappedArray.push(ascii - 96)
        }
    })
    const result = mappedArray.join(" ")

    return result
}