//update field count when like button is clicked
var counter_values = [0,0,0];

function addlikes1(){
    var counter1 = document.querySelector('#counter1');
    counter_values[0] = counter_values[0] + 1;

    counter1.innerText = counter_values[0];
}