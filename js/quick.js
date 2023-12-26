/*
author : Sam Manoli
DESCRIPTION: javascript file to complete quick sort with the random algorithm and visualise it
*/

function quick(){

    quickSort(0,sizeArr-1);

}


function partition(start, end) {
    
    var i = start + 1;
    var piv = rndArr[start] ;//make the first element as pivot element.
    updateDisplay(divs[start],"yellow",rndArr[start]);//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (rndArr[ j ] < piv)
            {
                updateDisplay(divs[j],"yellow",rndArr[j]);//Color update

                updateDisplay(divs[i],"red",rndArr[i]);//Color update
                updateDisplay(divs[j],"red",rndArr[j]);//Color update

                var temp=rndArr[i];
                rndArr[i]=rndArr[j];
                rndArr[j]=temp;

                updateDisplay(divs[i],"red",rndArr[i]);//Height update
                updateDisplay(divs[j],"red",rndArr[j]);//Height update

                updateDisplay(divs[i],"purple",rndArr[i]);//Height update
                updateDisplay(divs[j],"purple",rndArr[j]);//Height update

                i += 1;
            }
    }
    updateDisplay(divs[start],"red",rndArr[start]);//Color update
    updateDisplay(divs[i-1],"red",rndArr[i-1]);//Color update
    
    var temp=rndArr[start];//put the pivot element in its proper place.
    rndArr[start]=rndArr[i-1];
    rndArr[i-1]=temp;

    updateDisplay(divs[start],"red",rndArr[start]);//Height update
    updateDisplay(divs[i-1],"red",rndArr[i-1]);//Height update

    for(var t=start;t<=i;t++)
    {
        updateDisplay(divs[t],"green",rndArr[t]);//Color update
    }

    return i-1;//return the position of the pivot

    
}
 
function quickSort(l, high) {
    if (l < high) {
        
        let pi = partition(l, high);
   
        
        quickSort( l, pi - 1);
        quickSort( pi + 1, high);
    }
}