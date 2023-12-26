/*
author: sam manoli
DESCRIPTION: visualising bogo sort algorithm-- discarding it for now
*/
let count = 0
function isSorted(rndArr, sizeArr){
    for(var i = 1; i < sizeArr; i++)
        if (rndArr[i] < rndArr[i-1]){
            console.log('failed');
            count ++;
            for(var k =0; k < sizeArr; k++){
                updateDisplay(divs[k],"red",rndArr[k]);
            }
            
            // updateDisplay(divs[ind],"red",rndArr[ind]);
            return false;
            
        }else{
            updateDisplay(divs[i],"green",rndArr[i]);
        }
    return true;
}
 
//swap function
function swap(arr, xp, yp){
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
 
// To generate permutation of the array
function shuffle(rndArr, sizeArr){
    var i, j=sizeArr;
    for (i=0; i < sizeArr; i++){
        var ind = Math.floor(Math.random() * sizeArr);
        swap(rndArr, j-i-1, ind);
        
        updateDisplay(divs[ind], "red", rndArr[ind]);
        updateDisplay(divs[j - i - 1], "red", rndArr[j - i - 1]);


    }

    return rndArr;
}
 
// Sorts array a[0..n-1] using Bogo sort
function bogo(){
    // if array is not sorted then shuffle
    // the array again
    while (!isSorted(rndArr, sizeArr)){

        if(count == 10000){
            return "Bogo Sort took too long!";
            
        }
        rndArr = shuffle(rndArr, sizeArr);
    }
    for (var k = 0; k < sizeArr; k++) {
        updateDisplay(divs[k], "green", rndArr[k]);
    }
    
    return rndArr;
}