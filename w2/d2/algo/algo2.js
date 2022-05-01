

function build_array(){
    var arr = [];

    for(var i=1; i<=255; i++){
        arr.push(i);
    }

    return arr;
}

var results = build_array();
console.log(results);


function findMax(arr){
    var max = arr[0];

    for(var i = 1; i < arr.length; i++)
    {
        if(max < arr[i])
        {
            max = arr[i];
        }
    }
    return max;
}

function greaterY(arr, Y){



    return Count;
}