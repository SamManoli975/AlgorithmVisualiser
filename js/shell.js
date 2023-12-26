/*
author: sam manoli
description: shell sort visualiser

*/

function shell() { 
    c_delay=0;
     
   
        // Start with a big gap, then reduce the gap 
        for (let gap = Math.floor(sizeArr/2); gap > 0; gap = Math.floor(gap/2)) 
        { 
          
            // Do a gapped insertion sort for this gap size. 
            // The first gap elements a[0..gap-1] are already 
            // in gapped order keep adding one more element 
            // until the entire rndArray is gap sorted 
            for (let i = gap; i < sizeArr; i += 1) 
            { 
                updateDisplay(divs[i],"yellow",rndArr[i]);
                // add a[i] to the elements that have been gap 
                // sorted save a[i] in temp and make a hole at 
                // position i 
                let temp = rndArr[i]; 
                
                // shift earlier gap-sorted elements up until 
                // the correct location for a[i] is found 
                let j; 
                // updateDisplay(divs[i],"red",rndArr[i]);

                for (j = i; j >= gap && rndArr[j - gap] > temp; j -= gap) {
                    updateDisplay(divs[j-gap],"red",rndArr[j-gap]);
                    rndArr[j] = rndArr[j - gap]; 
                    
                }
                    


                // put temp (the original a[i]) in its correct 
                // location 
                rndArr[j] = temp; 
                updateDisplay(divs[j-gap],"green",rndArr[j-gap]);
                updateDisplay(divs[j],"green",rndArr[j]);
                

            } 
            
        } 
        for(let k =0;k<sizeArr;k++){
            updateDisplay(divs[k],"green",rndArr[k]);
        }
        updateDisplay(divs[0],"green",rndArr[0]);
        console.log(rndArr);
        return rndArr; 
} 