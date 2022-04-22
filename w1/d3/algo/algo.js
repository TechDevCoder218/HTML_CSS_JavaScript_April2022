var age = 10;

function checkAge(age){
    if(age > 16){
        console.log("you can borrow my keys");
    }else if(age < 6){
        console.log("you can borrow my bike");
    }else if(age == 9){
        console.log("you may need to take the bus");
    }else{
        console.log("you cannot drive a car yet");
    }
}

checkAge(5);

checkAge(age);

checkAge(25);

checkAge(9);

