
var newString = ['e','l','e','v','a','t','o','r']

var newArr=[];

var counter=0;

console.log('Before array reverse: ' + newString);

for(var i=newString.length-1; i >=0; i--){
    newArr[counter] = newString[i];
    counter++;
}

var testStr = newArr.toString();
console.log('After array reverse: ' + testStr);

