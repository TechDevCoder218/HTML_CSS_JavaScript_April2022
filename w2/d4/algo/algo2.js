// var sum = 0;

// for (var i=5; i<306; i+=2){
//     sum = sum +i;
// }
// console.log(sum);


// var array = [5,10,15,20];

// var smallest = array[0];
// var largest = array[array.length-1];

// console.log(largest-smallest);

var msg1 = 'hello';
var msg2 = 'world';

for(var n1=1; n1<=msg1.length; n1++){
    for(var n2=1; n2<=msg2.length;n2++){
        if(msg1.length == 4){
            console.log(msg1+''+msg2);
        }

    }

    if(n1 != 4){
        console.log(msg1.length+msg2.length);
    }
}