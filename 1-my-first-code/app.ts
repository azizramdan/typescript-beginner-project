let userInput: unknown
let userName: string

userInput = 5
userInput = 'Aziz'

userInput = userName
// userName = userInput // error

if (typeof userInput === 'string') {
  userName = userInput // success
}