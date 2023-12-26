/*
author: sam manoli
description: shell sort visualiser

*/

function shell(){ 
    c_delay=0;
     
   
    // Start with a big gap, then reduce the gap 
    for (let gap = Math.floor(sizeArr/2); gap > 0; gap = Math.floor(gap/2)){ 
        
        // Do a gapped insertion sort for this gap size. 
        // The first gap elements a[0..gap-1] are already 
        // in gapped order keep adding one more element 
        // until the entire rndArray is gap sorted 
        for (let i = gap; i < sizeArr; i += 1) { 
            // add a[i] to the elements that have been gap 
            // sorted save a[i] in temp and make a hole at 
            // position i 
            let temp = rndArr[i]; 
            let currentindex = i;

            updateDisplay(divs[currentindex],"yellow",rndArr[currentindex]);
            // updateDisplay(divs[i],"purple",rndArr[i]);
 
            // shift earlier gap-sorted elements up until 
            // the correct location for a[i] is found 
            let j; 
            // updateDisplay(divs[i],"red",rndArr[i]);

            for (j = i;j >= gap && rndArr[j - gap] > temp;j -= gap){

                updateDisplay(divs[j],"red",rndArr[j]);
                updateDisplay(divs[j-gap],"red",rndArr[j-gap]);

                // updateDisplay(divs[j-gap],"red",rndArr[j-gap]);
                rndArr[j] = rndArr[j - gap]; 

                updateDisplay(divs[j],"purple",rndArr[j]);
                updateDisplay(divs[j-gap],"purple",rndArr[j-gap]);

                // updateDisplay(divs[j],"purple",rndArr[j]);
                // updateDisplay(divs[j-gap],"purple",rndArr[j-gap]);   
            }      
            // put temp (the original a[i]) in its correct 
            // location 
            updateDisplay(divs[j],"red",rndArr[j]);
            rndArr[j] = temp; 
            updateDisplay(divs[currentindex],"green",rndArr[currentindex]);
            updateDisplay(divs[j],"green",rndArr[j]);

            // updateDisplay(divs[i],"green",rndArr[i]);
        } 
        
    } 
    for (let i = 0; i < sizeArr; i++) {
        updateDisplay(divs[i], "green", rndArr[i]);
    }
    
    
    console.log(rndArr);
    return rndArr; 
} 