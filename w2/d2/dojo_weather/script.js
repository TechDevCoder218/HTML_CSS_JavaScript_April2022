console.log("page loaded...");

var temp_values = [0,0,0,0,0,0,0,0];

function displayalert(element){
   alert(element.innerText);
}

function removecookiestmt(element){
    element.remove();
}

function choosetemptype(element){
    var daytemp1 = document.querySelector('#daytemp1');
    var daytemp2 = document.querySelector('#daytemp2');
    var daytemp3 = document.querySelector('#daytemp3');
    var daytemp4 = document.querySelector('#daytemp4');

    var nighttemp1 = document.querySelector('#nighttemp1');
    var nighttemp2 = document.querySelector('#nighttemp2');
    var nighttemp3 = document.querySelector('#nighttemp3');
    var nighttemp4 = document.querySelector('#nighttemp4');

    if(element.value == '°C')
    {
        temp_values[0] = parseInt(daytemp1.innerText);
        temp_values[1] = parseInt(daytemp2.innerText);
        temp_values[2] = parseInt(daytemp3.innerText);
        temp_values[3] = parseInt(daytemp4.innerText);
        temp_values[4] = parseInt(nighttemp1.innerText);
        temp_values[5] = parseInt(nighttemp2.innerText);
        temp_values[6] = parseInt(nighttemp3.innerText);
        temp_values[7] = parseInt(nighttemp4.innerText);

        for(var i=0; i<8; i++){
            temp_values[i] = (temp_values[i] - 32) * 5 / 9;
        }

        daytemp1.innerText = Math.ceil(temp_values[0]);
        daytemp2.innerText = Math.ceil(temp_values[1]);
        daytemp3.innerText = Math.ceil(temp_values[2]);
        daytemp4.innerText = Math.ceil(temp_values[3]);

        nighttemp1.innerText = Math.ceil(temp_values[4]);
        nighttemp2.innerText = Math.ceil(temp_values[5]);
        nighttemp3.innerText = Math.ceil(temp_values[6]);
        nighttemp4.innerText = Math.ceil(temp_values[7]);
    }else{
        temp_values[0] = parseInt(daytemp1.innerText);
        temp_values[1] = parseInt(daytemp2.innerText);
        temp_values[2] = parseInt(daytemp3.innerText);
        temp_values[3] = parseInt(daytemp4.innerText);
        temp_values[4] = parseInt(nighttemp1.innerText);
        temp_values[5] = parseInt(nighttemp2.innerText);
        temp_values[6] = parseInt(nighttemp3.innerText);
        temp_values[7] = parseInt(nighttemp4.innerText);

        for(var i=0; i<8; i++){
            temp_values[i] = temp_values[i] * 9 / 5 + 32;
        }

        daytemp1.innerText = Math.ceil(temp_values[0]);
        daytemp2.innerText = Math.ceil(temp_values[1]);
        daytemp3.innerText = Math.ceil(temp_values[2]);
        daytemp4.innerText = Math.ceil(temp_values[3]);

        nighttemp1.innerText = Math.ceil(temp_values[4]);
        nighttemp2.innerText = Math.ceil(temp_values[5]);
        nighttemp3.innerText = Math.ceil(temp_values[6]);
        nighttemp4.innerText = Math.ceil(temp_values[7]);
    }
}