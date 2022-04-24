//This is a template JavaScript file.

//for-loop sample
for(var i=0; i<10; i++){
    //add some code here
    console.log(i);
}

//while-loop sample
var i=0;

while(i<10){
    //add some code here
    console.log(i);
    i++
}

//function sample
var a = 10;
var b = 5;

function addValues(firstVal, secondVal){
    var sum = firstVal + secondVal;

    return sum;
}

var theAnswer = addValues(a,b);
console.log('The answer is: '+ theAnswer);