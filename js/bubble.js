/*
author : Sam Manoli
DESCRIPTION: javascript file to complete bubble sort with the random algorithm and visualise it
*/

function bubble(){

    for(var i=0;i<sizeArr-1;i++){
        

        for(var j=0;j<sizeArr-i-1;j++){

            updateDisplay(divs[j],"yellow",rndArr[j]);

            if(rndArr[j]>rndArr[j+1]){

                updateDisplay(divs[j], "red",rndArr[j]);
                updateDisplay(divs[j+1], "red",rndArr[j+1]);

                var temp=rndArr[j];
                rndArr[j]=rndArr[j+1];
                rndArr[j+1]=temp;

                updateDisplay(divs[j], "red",rndArr[j]);
                updateDisplay(divs[j+1], "red",rndArr[j+1]);
            }
            updateDisplay(divs[j], "purple",rndArr[j]);
        }
        updateDisplay(divs[j], "green",rndArr[j]);
    }
    updateDisplay(divs[0], "green",rndArr[0]);
    enable_buttons();

    
    // console.log("Bubble sort: " + rndArr);
}