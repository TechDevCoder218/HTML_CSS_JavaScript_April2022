//update field count when like button is clicked
var counter_values = [0,0,0];

function addlikes1(){
    var counter1 = document.querySelector('#counter1');
    counter_values[0] = counter_values[0] + 1;

    counter1.innerText = counter_values[0];
}

function addlikes2(){
    var counter2 = document.querySelector('#counter2');
    counter_values[1] = counter_values[1] + 1;

    counter2.innerText = counter_values[1];
}

function addlikes3(){
    var counter3 = document.querySelector('#counter3');
    counter_values[2] = counter_values[2] + 1;

    counter3.innerText = counter_values[2];
}