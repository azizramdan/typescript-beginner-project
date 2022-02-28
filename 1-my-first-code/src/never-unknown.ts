let userInput: unknown
let userName: string

userInput = 5
userInput = 'Aziz'
userName = 'Rysa'

userInput = userName
// userName = userInput // error

if (typeof userInput === 'string') {
  userName = userInput // success
}

function generateError(message: string, code: number): never {
  throw { message, code }
}

generateError('An error occured!', 500)