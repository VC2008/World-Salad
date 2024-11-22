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

let myStory = `Hello ${username}, how are you doing today? can you believe that you're ${userAge} years old? you're growing up so fast, thats very nice. You hungry at all? ${yesorno}.
 I see, well if you're itching for some serious delicacies, then I have something interesting for you. This my favorite brand of word salad! Words such as ${Noun} make some great bites to eat during the day and are rich in Vitamin C.` 

console.log(myStory)
document.getElementById('story').innerHTML = mystory;

