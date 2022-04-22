var remainderVal=0;

for(var i=1; i<=100; i++){
    var remainderVal = i;

    if(remainderVal % 3 == 0 && remainderVal % 5 == 0)
    {
        console.log('FizzBuzz');
    }else if(remainderVal % 3 == 0)
    {
        console.log('Fizz');
    }else if(remainderVal % 5 == 0)
    {
        console.log('Buzz');
    }else{
        console.log(i);
    }
}