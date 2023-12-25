/*
author: Sam Manoli
description: main javascript file for the algorithm visualiser project
*/
newArr = document.getElementById("a_generate").addEventListener( "click",gen_array);
sizeArr = document.getElementById("a_size").value;
speedAlg = document.getElementById("a_speed").value;
document.getElementById("a_size").addEventListener("input", update_rndArr);

let cont=document.getElementById("array_container");

var ButtonAlgs=document.querySelectorAll(".algs button");

let divs = [];
let rndArr =[];
// let margin_size=0.1;
//generate a new array
function gen_array(){
    // let divs = [];
    // let rndArr =[];
    cont.innerHTML="";


    // console.log(sizeArr)
    // console.log('Array generated');
    
    
    for(var i = 0; i < sizeArr; i++){
        
        rndArr[i] = Math.floor(Math.random() * 80) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:purple; width:" + (100/sizeArr-(2*margin_size)) + "%; height:" + (rndArr[i]) + "%;";
    }
    //display array
    // displayArray(arr);
    console.log("Array generated: " + rndArr);
}
function update_rndArr()
{   
    sizeArr = document.getElementById("a_size").value;
    gen_array();
}

window.onload=update_rndArr();

for(var i=0;i<ButtonAlgs.length;i++)
{
    ButtonAlgs[i].addEventListener("click",sortAlgs);
}
// document.getElementById("a_selection").addEventListener("click", selection);

function sortAlgs(){
    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":bubble();
                        break;
        case "Selection":selection();
                        break;
        // case "Insertion":Insertion();
        //                 break;
        // case "Merge":Merge();
        //                 break;
        // case "Quick":Quick();
        //                 break;
        // case "Heap":Heap();
        //                 break;
        // case "Bogo":Bogo();
        //                 break;
    }
}
speed = 900;//set the speed of the algorithm
var delay_time=10000/(Math.floor(sizeArr/10)*speed);//Decrease numerator to increase speed.
var c_delay=0;//This is updated ov every div change so that visualization is visible.


//important function to edit the display of the block according the the sorting algorithm, i will have to place this
//function strageically to edit the block
function updateDisplay(cont, color, height){
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/sizeArr-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color +  ";";
    },c_delay+=delay_time);
}