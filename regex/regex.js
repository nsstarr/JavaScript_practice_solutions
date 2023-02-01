export function isValidCommand(command) {
  const regex = /^chatbot/gi
  return regex.test(command)
}
//The \d RegEx matches any number. The + modifier is a flag to match all adjacent numbers. 
//Using /g finds and replaces all numbers in the string in one go.
export function removeEmoji(message) {
    return message.replace(/emoji\d+/g, '');
}