/*
author : Sam Manoli
DESCRIPTION: javascript file to complete insertion sort with the random algorithm and visualise it
*/

function insertion(){


    for(let i=1;i<sizeArr;i++){
        updateDisplay(divs[i],"yellow",rndArr[i]);

        let key = rndArr[i];
        let j = i-1;

        while(j>=0 && rndArr[j]>key){
            updateDisplay(divs[j],"red",rndArr[j]);
            updateDisplay(divs[j+1],"red",rndArr[j+1]);


            rndArr[j+1]=rndArr[j];
            updateDisplay(divs[j],"purple",rndArr[j]);

            if(i = j-1){
                updateDisplay(divs[j+1],"yellow",rndArr[j+1]);
            }else{
                updateDisplay(divs[j+1],"purple",rndArr[j+1]);
            }
            j--;
        }
        updateDisplay(divs[j],"green",rndArr[j]);

        rndArr[j+1]=key;
        
        for(let t=0;t<j;t++){
            updateDisplay(divs[t],"green",rndArr[t]);
        }
       
    }
    updateDisplay(divs[sizeArr-1],"green",rndArr[sizeArr-1]);
}