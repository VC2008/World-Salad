let username = prompt('What is your name?')
let userAge = prompt('How old are you?')
console.log(username)
console.log(userAge)

let myStory = `Hello ${username}, how are you doing today? how does it feel to be ${userAge} years old?`
console.log(myStory)

document.getElementById('story').innerHTML = myStory