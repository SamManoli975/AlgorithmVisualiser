/*
author: sam manoli
description: cycle sort algorithm

*/

function cycle()
{
 
    // count number of memory writes
    let writes = 0;

    // traverse rndArray elements and put it to on
    // the right place
    for (let cycle_start = 0; cycle_start <= sizeArr - 2; cycle_start++)
    {
        // updateDisplay(divs[cycle_start-1],"purple",rndArr[cycle_start-1]);
        
        // initialize item as starting point
        let item = rndArr[cycle_start];
        updateDisplay(divs[cycle_start],"yellow",rndArr[cycle_start]);


        // Find position where we put the item. We basically
        // count all smaller elements on right side of item.
        let pos = cycle_start;
        for (let i = cycle_start + 1; i < sizeArr; i++){

            updateDisplay(divs[i],"yellow",rndArr[i]);

            if (rndArr[i] < item){
                updateDisplay(divs[pos],"red",rndArr[pos]);
                updateDisplay(divs[i],"red",rndArr[i]);
                pos++;
            }
            // updateDisplay(divs[i],"purple",rndArr[i]);


        }
                

        // If item is already in correct position
        if (pos == cycle_start){
            updateDisplay(divs[pos],"green",rndArr[pos]);
        
            continue;
        }

        // ignore all duplicate elements
        while (item == rndArr[pos]){
            // updateDisplay(divs[pos],"purple",rndArr[pos]);

            pos += 1;
        }
        // put the item to it's right position
        if (pos != cycle_start){
            // updateDisplay(divs[pos],"red",rndArr[pos]);
            // updateDisplay(divs[i],"red",rndArr[i]);

            let temp = item;
            item = rndArr[pos];
            rndArr[pos] = temp;

            updateDisplay(divs[pos],"green",rndArr[pos]);
            updateDisplay(divs[i],"green",rndArr[i]);
            writes++;
        }
        updateDisplay(divs[i],"purple",rndArr[i]);

        // Rotate rest of the cycle
        while (pos != cycle_start)
        {
            pos = cycle_start;

            // Find position where we put the element
            for (let i = cycle_start + 1; i < sizeArr; i++)
                if (rndArr[i] < item)
                    pos += 1;

            // ignore all duplicate elements
            while (item == rndArr[pos])
                pos += 1;

            // put the item to it's right position
            if (item != rndArr[pos]) {
                let temp = item;
                item = rndArr[pos];
                rndArr[pos] = temp;
                updateDisplay(divs[pos],"green",rndArr[pos]);
                updateDisplay(divs[i],"green",rndArr[i]);
                
                writes++;
            }
        }
       

    }
    updateDisplay(divs[sizeArr-1],"green",rndArr[sizeArr-1]);
    console.log(rndArr)
}