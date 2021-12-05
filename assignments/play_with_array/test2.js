function mean(arr){
    var l=arr.length;
    var SUM=0;
    for (var i=0;i<l;i++){
        SUM+=arr[i];

    }
    var mean=SUM/l
    return mean.toFixed("2")
}

function median(arr){
    var l=arr.length;
    var mid=parseInt(l/2);
    if (l%2!==0){
        return arr[mid].toFixed("2");
    }else{
        return ((arr[mid]+arr[mid-1])/2).toFixed("2");

    }
}


let arr=[1,2,3,-4,5,-6];
console.log( mean(arr))
console.log(median(arr))