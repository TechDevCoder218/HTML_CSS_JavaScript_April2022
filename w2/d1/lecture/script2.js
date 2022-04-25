//script for the html starts here

function clicked(){
    console.log('was clicked');

    //i want to store an element from my html as a variable
    var h1 = document.querySelector('#title2 > span');
    var cla = document.querySelector('#cla');

    cla.innerText = 'Tenth';
    
    h1.style.backgroundColor = 'orange';
    
    h1.onmouseover = function(){
        h1.style.backgroundColor='yellow';
    }
    
    h1.onmouseout = function(){
        h1.style.backgroundColor = 'orange';
    }
}

function addclass(){
    //show you the classes on the h1
    var h1 = document.querySelector('h1');
    console.log(h1.classList);
    if(h1.classList.contains('red')){
        console.log('it has already has red');
    }else{
        h1.classList.add('red');
        h1.classList.remove('bob');
    }
}

function firstclass(){
    var h1 = document.querySelector('h1');
    console.log(h1.classList[0]);
}

function showname(input){
    console.log(input.value);
}

function myalert(){
    alert('This waited 3 seconds');
}

setTimeout(myalert,3000);