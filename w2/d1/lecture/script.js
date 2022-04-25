function vroom(){
    //code
}

var vroom2 = function(){
    //code
    console.log('vrooom function is being called');
}

var billy ={
    'age':21,
    'start':function(){
        console.log('function in billy object is being called')
        this.age = '45'
        console.log(this.age)
 }}

 var testing = 6;

var joe = {'testing':testing,
            'start':vroom2,
            'age':28,
            'colors':['red','green','purple'],
            'bestie':billy
}


//Sample functions calls using these JSON objects
//billy.start()

//joe.start()

//object calling on another object
console.log(joe.bestie.age);
joe.bestie.start();    //the this command in the start will mean that billie will have called the start function()

//console.log(joe.colors[1].length);

//console.log(billy.age, joe['age']);

//console.log(joe['age']);

//console.log(joe.age, joe['testing']);
//console.log(billy.age);

//making use of the 'this' keyword


