console.log("page loaded...");

function updateprofname(){
    var profilename = document.querySelector('#profilename');
    
    profilename.innerText = "Mary Smith";
}

function removeconnectreq(element){
    element.remove();
}