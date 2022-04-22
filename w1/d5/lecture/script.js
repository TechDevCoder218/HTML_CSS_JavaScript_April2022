console.log('hello world');

//navigate to where the .js file is located
//cd changes directory
//.. will go back one folder
//ls or dir to show you what files are in your current folder

// you can type node script.js to run a javascript file.

//variables
var name = 'bob';
var mynum = 8;
var arr = [];
var mycat = {};
var israining = false;

mynum = 'five';  //you can change the value and type of data stored in a variable

//operators
// + - / %  && ||  ++  --  <  >  == === =  !=  += -=  <=  >=

// if(mynum > 10)
   {
       console.log('this will have an error');
   }

   //optionaly else or else if
   if(mynum == 'four')
   {
       console.log('i like 4');
   }else{
       console.log('i wish it was four');
   }

   if(mynum == 'five' || israining){
       console.log('its a dreary day');
   }

var arr =[];

//loops
for(var i=0; i<10;i++){
    console.log(i);
    arr.push(i);  //push values to the array
}

var i=0;
while(i<10){
    console.log(i);
    i++;
}

//arrays
//use array notation []
//used for both setting and geting values from the array
var myarr = ['a','b','c'];

//get value at index 1
//arrays are 0 indexed which means that they start from 0
myarr[1];

//set value at index 2
myarr[2] = 'cat';

//we can store anything in an array
//even a null can be stored in an array
myarr[0]= null;
console.log(myarr);

//we can add to the end of an arry with push
myarr.push('zebra');
console.log(myarr);

//we can also remove from an array with pop
myarr.pop();
console.log(myarr);

//functions   //this is to declare a function
function setx(value, value3){
    x = value;
    y = value3;
    console.log(value + ' ' + value3);
}

setx(4);   //this is calling a function

//note the parameters or arguments of the function will be populated in order when passed in from the function call. So just sending a 4 in this case, would populate the value variable.
//all functions return something
//if there is no return statement they return undefined
function makearr(num,num2,num3){
    return[num,num2,num3]
}

var newarr = makearr(1,2,3);
console.log(newarr);



