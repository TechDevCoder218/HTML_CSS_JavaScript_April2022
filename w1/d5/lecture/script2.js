console.log('page loading');

//pretend I changed the color of the button

function example(element){
    console.log('element clicked', element);
}

function vanish(element){
    element.remove();
}

function over(element){
    element.style.backgroundColor = 'lime';
}

function out(element){
    element.style.backgroundColor ='white';
}

