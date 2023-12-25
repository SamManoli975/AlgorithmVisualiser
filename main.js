/*
author: Sam Manoli
description: main javascript file for the algorithm visualiser project
*/
newArr = document.getElementById("a_generate").addEventListener( "click",gen_array);
sizeArr = document.getElementById("a_size").value;
speedAlg = document.getElementById("a_speed").value;

console.log('hi')


//generate a new array
function gen_array(){
    console.log('Array generated');
    var arr = [];
    for(var i = 0; i < sizeArr; i++){
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
    //display array
    displayArray(arr);
}
console.log("Array generated: " + arr);