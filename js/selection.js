/*
author : Sam Manoli
DESCRIPTION: javascript file to complete selection sort with the random algorithm and visualise it
*/
// rndArr = [1,5,2,6,4,3]


// console.log('this file is fine');

//function to perform and update the selection sorting algorithm
function selection(){

    //going through the list
    for (let i = 0; i < sizeArr; i++) {
        //updating the current element red 
        updateDisplay(divs[i],"red" , rndArr[i] );
        //set the first element as the minimum
        let min = i;
        //going through the rest of the elements while still looking at i
        for (let j = i + 1; j < sizeArr; j++) {
            //updating all the other elements yellow as we go down the array
            updateDisplay(divs[j],"yellow" , rndArr[j] );
            //if the element we pass is smaller than the minimum element  then change it
            if (rndArr[j] < rndArr[min]) {
                //but if the min is not i, change the min to purple meaning back to normal colour
                if(min != i){
                    updateDisplay(divs[min],"purple" , rndArr[min] );
                }
                min = j;//set min
                //change color to red meaning out of place 
                updateDisplay(divs[min],"red" , rndArr[min] );
            }
            else{//or if the element is bigger than min set back to normal position aka unsorted

                updateDisplay(divs[j],"purple" , rndArr[j] );
            }
        }
        if (min !== i) {
            //if min is not i swap the elements, so if the element we are looking at is not i
            //then change the positions as we want the min to go before the other numbers
            
            // Swap
            ;[rndArr[i], rndArr[min]] = [rndArr[min], rndArr[i]];

            //change the height and color of either the min or the i element
            updateDisplay(divs[min],"red",rndArr[min]);//Height update
            updateDisplay(divs[i],"red",rndArr[i]);//Height update
            updateDisplay(divs[min],"purple",rndArr[min]);//Color update
        }
        //after this the current elemnt in i has to be sorted so turn it green aka solved
        updateDisplay(divs[i],"green" , rndArr[i] );

    }
    //turn it green also (this is the last element)
    updateDisplay(divs[i],"green" , rndArr[i] );


    //debugging checking the array
    // for(i=0;i<sizeArr;i++){
    //     console.log("Comparing: " + rndArr[i]);
    // }
    // return rndArr;
    //more debugging
    // console.log("Selection sort completed: " + rndArr)
    enable_buttons();

};

