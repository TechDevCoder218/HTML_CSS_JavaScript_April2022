//Math library which contains a bunch of math related functions

//rounds numbers up
Math.ceil(9.51);
Math.ceil(9.1);

//rounds numbers down
Math.floor(8.45);
Math.floor(8.99);

//Generating a random number
//Sample 1.
var random = Math.random();

console.log(random);

random = random * 11;

random = Math.floor(random);

console.log(random);

//Another way to generate a random number using only one line of code 0 to less than 11
var random2 = Math.floor(Math.random() * 11);

console.log(random2);

// if you want to start from 1 to less than 11 instead of starting from 0
var random3 = Math.floor(Math.random() * 11 + 1);

//if you want to start from 1 to 10 instead of 1 to 11
var random4 = Math.floor(Math.random() * 10 + 1);

//cycling random numbers between 1 to 10
for(let i=0;i<10; i++){
    var random5 = Math.floor(Math.random() * 10 + 1);
    console.log(random5);
}

//Dice Roller
function d6(){
    var diceRoll = Math.floor(Math.random() * 6 + 1);
    return diceRoll;
}

var random5 = d6();

console.log('The player rolled: ' + random5);


// Consult the Oracle
// Using the following array, write a function that will answer all of our questions by randomly choosing a response

function rollFortune(){
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

    var newRoll = Math.floor(Math.random() * 20 + 1);
    return lifesAnswers[newRoll];
}

var random6 = rollFortune();

console.log(random6);

