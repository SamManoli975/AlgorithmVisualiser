/*
author:sam manoli

description: cocktail sort, kinda like bubble sort but going forwards and backwards


*/

function cocktail()
    {
        let swapped = true;
        let start = 0;
        let end = sizeArr;
  
        while (swapped == true) {
  
            // reset the swapped flag on entering the
            // loop, because it might be true from a
            // previous iteration.
            swapped = false;
  
            // loop from bottom to top same as
            // the bubble sort
            for (let i = start; i < end - 1; ++i) {

                updateDisplay(divs[i],"yellow",rndArr[i]);
                if (rndArr[i] > rndArr[i + 1]) {

                    updateDisplay(divs[i], "red",rndArr[i]);
                    updateDisplay(divs[i+1], "red",rndArr[i+1]);

                    let temp = rndArr[i];
                    rndArr[i] = rndArr[i + 1];
                    rndArr[i + 1] = temp;

                    updateDisplay(divs[i], "red",rndArr[i]);
                    updateDisplay(divs[i+1], "red",rndArr[i+1]);

                    swapped = true;
                }
                updateDisplay(divs[i], "purple",rndArr[i]);
                updateDisplay(divs[i], "green",rndArr[i]);
                updateDisplay(divs[i+1], "green",rndArr[i+1]);


            }
            

  
            // if nothing moved, then array is sorted.
            if (swapped == false)
                break;
  
            // otherwise, reset the swapped flag so that it
            // can be used in the next stage
            swapped = false;
  
            // move the end point back by one, because
            // item at the end is in its rightful spot
            end = end - 1;
  
            // from top to bottom, doing the
            // same comparison as in the previous stage
            for (let i = end - 1; i >= start; i--) {

                updateDisplay(divs[i],"yellow",rndArr[i]);

                if (rndArr[i] > rndArr[i + 1]) {

                    updateDisplay(divs[i], "red",rndArr[i]);
                    updateDisplay(divs[i+1], "red",rndArr[i+1]);

                    let temp = rndArr[i];
                    rndArr[i] = rndArr[i + 1];
                    rndArr[i + 1] = temp;

                    updateDisplay(divs[i], "red",rndArr[i]);
                    updateDisplay(divs[i+1], "red",rndArr[i+1]);

                    swapped = true;
                }
                updateDisplay(divs[i], "purple",rndArr[i]);
                updateDisplay(divs[i], "green",rndArr[i]);
                updateDisplay(divs[i+1], "green",rndArr[i+1]);


            }
            

  
            // increase the starting point, because
            // the last stage would have moved the next
            // smallest number to its rightful spot.
            start = start + 1;
        }
        console.log(rndArr)
    }