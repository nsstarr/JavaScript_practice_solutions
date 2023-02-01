export function isValidCommand(command) {
  const regex = /^chatbot/gi
  return regex.test(command)
}
//The \d RegEx matches any number. The + modifier is a flag to match all adjacent numbers. 
//Using /g finds and replaces all numbers in the string in one go.
export function removeEmoji(message) {
    return message.replace(/emoji\d+/g, '');
}

export function checkPhoneNumber(number) {
   if (/^\(\+[0-9][0-9]\) [0-9]{3}-[0-9]{3}-[0-9]{3}$/.test(number)) {
    return 'Thanks! You can now download me to your phone.'
  }
  return `Oops, it seems like I can't reach out to ${number}`
}

export function getURL(userInput) {
  const regex = /\w+?\.\w+/g;
  return userInput.match(regex)
}

export function niceToMeetYou(fullName) {
  const politeName = fullName.replace(/([a-z]+), ([a-z]+)/i, '$2 $1')
  return `Nice to meet you, ${politeName}`
}