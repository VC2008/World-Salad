let username = prompt('What is your name?')
let userAge = prompt('How old are you?')
let yesorno = prompt('Are you Hungry?')
let noun = prompt('Give me a noun')
let verb = prompt('Give me a verb')
let adjective = prompt ('Give me an adjective')
let pronoun = prompt ('Give me a pronoun')
let conjunction = prompt ('give me a conjunction')
let favoriteWord = prompt ('What is your favorite word in the entire English lexicon')

console.log(username)
console.log(userAge)
console.log(yesorno)
console.log(noun)
console.log(verb)
console.log(adjective)
console.log(pronoun)
console.log(conjunction)

let myStory = `Hello ${username}, how are you doing today? can you believe that you're ${userAge} years old? you're growing up so fast and im proud of you. You hungry at all? ${yesorno}. I see, well if you're itching for some real delicacies, then I have something for you.
A good food to start the day off with is ${noun}`
console.log(myStory)

document.getElementById('story').innerHTML = myStory