/*
author: sam manoli
description: comb alogrithm and also visualising it using the updateDisplay function


*/

function getNextGap(gap){
        
        gap = parseInt((gap*10)/13, 10);
        if (gap < 1)
            return 1;
        return gap;
    }
  

function comb(){


    
    let gap = sizeArr;

    
    let swapped = true;

   
    while (gap != 1 || swapped == true){
        
        gap = getNextGap(gap);

        
        swapped = false;

        
        for (let i=0; i<sizeArr-gap; i++){
            let currentindex = i;

            // updateDisplay(divs[currentindex],"yellow",rndArr[currentindex]);

            if (rndArr[i] > rndArr[i+gap]){

                // updateDisplay(divs[i],"yellow",rndArr[i]);

                updateDisplay(divs[i+gap],"red",rndArr[i+gap]);
                updateDisplay(divs[i],"red",rndArr[i]);


                
                let temp = rndArr[i];
                rndArr[i] = rndArr[i+gap];
                rndArr[i+gap] = temp;

                updateDisplay(divs[i],"purple",rndArr[i]);
                updateDisplay(divs[i+gap],"purple",rndArr[i+gap]);

                // updateDisplay(divs[i],"purple",rndArr[i]);
                updateDisplay(divs[i],"green",rndArr[i]);
                updateDisplay(divs[i+gap],"green",rndArr[i+gap]);
                swapped = true;

            }
                
        }
        updateDisplay(divs[i],"green",rndArr[i]);

    }
    // console.log(rndArr);
    enable_buttons();

}
    