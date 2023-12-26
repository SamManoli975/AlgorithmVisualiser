/*
author : Sam Manoli
DESCRIPTION: javascript file to complete merge sort with the random algorithm and visualise it
*/

function merge(){
    mergePrep(0, sizeArr - 1);
}
function mergeSort(l,m,r){
    var p=l,q=m+1;

    var Arr=[],k=0;

    for(var i=l; i<=r; i++)
    {
        if(p>m)
        {
            Arr[k++]=rndArr[q++];
            updateDisplay(divs[q-1],"red",rndArr[q-1]);//Color update
        }
        else if(q>r)
        {
            Arr[k++]=rndArr[p++];
            updateDisplay(divs[p-1],"red",rndArr[p-1]);//Color update
        }
        else if(rndArr[p]<rndArr[q])
        {
            Arr[k++]=rndArr[p++];
            updateDisplay(divs[p-1],"red",rndArr[p-1]);//Color update
        }
        else
        {
            Arr[k++]=rndArr[q++];
            updateDisplay(divs[q-1],"red",rndArr[q-1]);//Color update
        }
    }

    for(var t=0;t<k;t++)
    {
        rndArr[l++]=Arr[t];
        updateDisplay(divs[l-1],"green",rndArr[l-1]);//Color update
    }
}

function mergePrep(l,r){
    if(l>=r){
        return;
    }
    var m =Math.floor((l + r) / 2);
    updateDisplay(divs[m],"yellow",rndArr[m]);//Color update

    mergePrep(l,m);
    mergePrep(m+1,r);
    mergeSort(l,m,r);
}
