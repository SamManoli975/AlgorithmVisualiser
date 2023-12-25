/*
author: Sam Manoli
description: main javascript file for the algorithm visualiser project
*/
newArr = document.getElementById("a_generate").addEventListener( "click",gen_array);
sizeArr = document.getElementById("a_size").value;
speedAlg = document.getElementById("a_speed").value;
document.getElementById("a_size").addEventListener("input", update_array_size);

let cont=document.getElementById("array_container");
let divs = [];
let div_sizes =[];



//generate a new array
function gen_array(){
    cont.innerHTML="";


    // console.log(sizeArr)
    // console.log('Array generated');

    var arr = [];
    for(var i = 0; i < sizeArr; i++){
        div_sizes[i] = Math.floor(Math.random() * 80) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/sizeArr-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
    //display array
    // displayArray(arr);
    console.log("Array generated: " + div_sizes);
}
function update_array_size()
{
    sizeArr=document.getElementById("a_size").value;
    gen_array();
}

window.onload=update_array_size();