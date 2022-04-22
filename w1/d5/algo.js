var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);


var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}


var arr = ["a", "b", "c", "d", "e"];

function reverse(arr){
    var i=0;
    var answer = [];

    while(i < arr.lengh/2-1)
    {
        var frontElement = arr[i];
        var lastElement = arr[arr.length-1-i]
        var tempVar = lastElement;
        arr[i] = firstElement;
        arr[arr.lenght/2-1-i];
        i++;

    }



}

var newArr = ["a", "b", "c", "d", "e"];
var tempArr = [];

function reverse(arr){
    var i=0;
    var firstElement = 0;
    var tempElement = 0;

    while(i < arr.length)
    {
        tempElement = arr[arr.length-1-i];
        tempArr[i] = tempElement;
        i++;
        console.log(arr);
    }
    
}

reverse(newArr);