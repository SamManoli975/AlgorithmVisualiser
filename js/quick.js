/*
author : Sam Manoli
DESCRIPTION: javascript file to complete quick sort with the random algorithm and visualise it
*/

function quick(){

    quickSort(0,sizeArr-1);

}


function partition(start, end) {
    
    var i = start + 1;
    var piv = rndArr[start] ;
    updateDisplay(divs[start],"yellow",rndArr[start]);

        for(var j =start + 1; j <= end ; j++ )
        {
            
            if (rndArr[ j ] < piv)
            {
                updateDisplay(divs[j],"yellow",rndArr[j]);

                updateDisplay(divs[i],"red",rndArr[i]);
                updateDisplay(divs[j],"red",rndArr[j]);

                var temp=rndArr[i];
                rndArr[i]=rndArr[j];
                rndArr[j]=temp;

                updateDisplay(divs[i],"red",rndArr[i]);
                updateDisplay(divs[j],"red",rndArr[j]);

                updateDisplay(divs[i],"purple",rndArr[i]);
                updateDisplay(divs[j],"purple",rndArr[j]);

                i += 1;
            }
    }
    updateDisplay(divs[start],"red",rndArr[start]);
    updateDisplay(divs[i-1],"red",rndArr[i-1]);
    
    var temp=rndArr[start];
    rndArr[start]=rndArr[i-1];
    rndArr[i-1]=temp;

    updateDisplay(divs[start],"red",rndArr[start]);
    updateDisplay(divs[i-1],"red",rndArr[i-1]);

    for(var t=start;t<=i;t++)
    {
        updateDisplay(divs[t],"green",rndArr[t]);
    }

    return i-1;

    
}
 
function quickSort(l, high) {
    if (l < high) {
        
        let pi = partition(l, high);
   
        
        quickSort( l, pi - 1);
        quickSort( pi + 1, high);
    }
}