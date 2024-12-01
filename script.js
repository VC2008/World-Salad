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
console.log(favoriteWord)

let myStory = `Hello ${username}, how are you doing today? can you believe that you're ${userAge} years old? you're growing up so fast, thats very nice. You hungry at all? ${yesorno}.
 I see, well if you're itching for some serious delicacies, then I have something interesting for you. This my favorite brand of word salad! Words such as ${noun} make some great bites to eat during the day and are rich in Vitamin C. 
 If you want a great lunch, some ${verb}s would do just fine. they have plenty of whole grains and minerals that'll get you through any type of afternoon. another great dish for morning and noon is some ${adjective},
  which also supply the same nutritions, how lovely! if you're feasting over what you want for dinner, I'd personally reccomend some ${pronoun}, which are known for the hearty meal they provide, and the meal stays fresh for a long time so you can have it almost anywhere!
   If you're interested in a sweet treat or a snack, a ${conjunction} should do the trick and can hold you over for those longer hours. 
   But those are just my preferences, what's your favorite word meal? ${favoriteWord}...I see, thats a great choice! I'll try that out someday too.` 

console.log(myStory)
document.getElementById('story').innerHTML = mystory;

