//Fibonacci sequence

// let n1 = 0, n2 = 1, nextTerm

// var number = 10;

// console.log('Fibonacci Series');

// for(let i= 1; i <= number; i++){
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }




// Can add new attributes such as score and bestie to a javascript object. 
//The javascript objects can grow as you need them to with new attributes.
//The new attribute 'bestie' which was added in the last line, is a pointer to the 'carl' object.
// var people = [{name:'bob'},{name:'carl'},{name:'joe'}]

// for (var i=0; i< people.length; i++){
//     var rand = Math.floor(Math.random()*100+1);
//     people[i].score = rand;
// }

// people[0].bestie = people[1];


//querySelectorAll can be used to select all items with the listed target identifier. In this sample, it would be all elements on the page which have a <p> tag
// var ps = document.querySelectorAll('.fb')
// for(var i=0;i<ps.length;i++){
//     ps[i].style.backgroundColor = 'firebrick';
// }

// newstr = '';
// for(var i=0; i<people.length;i++){
//     newstr +=  '<a href="#">go to '+people[i].name +' s </a> or at least not here <br>'
// }
// ps[1].innerHTML=newstr;



//API  This means Application Programming Interface
//This is a place we send commands to get data
//Asynchronous function: this happens out of order
//the async command will tell javascript to go ahead and run other code while thie async code keeps running
var ps = document.querySelectorAll('.fb')
var poki;
var newstr = '';

async function getpoki(){
    var res = await fetch('https://pokeapi.co/api/v2/pokemon/')
    var data = await res.json();
    poki=data
    console.log(poki);
}

async function addpoki(){
    //1console.log(data);
    newstr = '<ul>'

    for(var i=0; i<poki.length;i++){
        
        newstr +='<li>'+poki[i].name+'</li>';
    
        ps[1].innerHTML=newstr +'</ul>'
    
    }
}





//AJAX  Asynchronous JavaScript and XML
//Bootstrap is a style library
//JQuery library a better way to use javascript

//Media Query: check the .css file.


//Bootstrap check the .css file.






