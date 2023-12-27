/*
author: Sam Manoli
description: main javascript file for the algorithm visualiser project
*/

newArr = document.getElementById("a_generate");
newArr.addEventListener( "click",gen_array);


inpSize = document.getElementById("a_size");
sizeArr = inpSize.value;


inpSpeed = document.getElementById("a_speed");
speedAlg = inpSpeed.value;

document.getElementById("a_size").addEventListener("input", update_rndArr);

let cont=document.getElementById("array_container");//container

var ButtonAlgs=document.querySelectorAll(".algs button");

//arrays for the algorithm sorter
let divs = [];
let rndArr =[];

//generate a new array
function gen_array(){
    // let divs = [];
    
    cont.innerHTML="";

    // debugging
    // console.log(sizeArr)
    // console.log('Array generated');
    
    
    for(var i = 0; i < sizeArr; i++){
        
        // filling the array with random numbers
        rndArr[i] = Math.floor(Math.random() * 80) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);//appending the numbers to the container
        margin_size=0.1;//margin size
        divs[i].style=" margin:0% " + margin_size + "%; background-color:purple; width:" +
        (100/sizeArr-(2*margin_size)) + "%; height:" + (rndArr[i]) + "%;";//the styling to create the dynamic divs
    }
    
    // displayArray(arr);
    console.log("Array generated: " + rndArr);
}

//function to update the array when the size is changed
function update_rndArr(){   
    //get the size from the input
    sizeArr = document.getElementById("a_size").value;
    gen_array();//run the generate array function
}
//load the update array size when the window is loaded
window.onload=update_rndArr();

for(var i=0;i<ButtonAlgs.length;i++){
    //add an event listener to the buttons that trigger the sorting switch statement 
    ButtonAlgs[i].addEventListener("click",sortAlgs);
}

//function to disable the buttons when an algorithm is taking place
function disable_buttons(){
    for(var i=0;i<ButtonAlgs.length;i++){

        //create an array
        ButtonAlgs[i].classList=[];
        ButtonAlgs[i].classList.add("butt_locked");
        //disable all the buttons
        ButtonAlgs[i].disabled=true;
        newArr.disabled=true;
        inpSize.disabled=true;
        inpSpeed.disabled=true;
    }
}


//function to sort the algorithm, a switch case to differentiate the buttons pressed
function sortAlgs(){

    disable_buttons();//run the disable button function to disable the buttons while a sorting alg is taking place
    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":bubble();
                        break;
        case "Selection":selection();
                        break;
        case "Insertion":insertion();
                        break;
        case "Merge":merge();
                        break;
        case "Quick":quick();
                        break;
        case "Bogo":bogo();
                        break;
        case "Shell":shell();
                        break;
        case "Comb":comb();
                        break;
        case "Cycle":cycle();
                        break;
        case "Cocktail":cocktail();
                        break;
    }
}


speed = 900;//set the speed of the algorithm

document.getElementById("a_speed").addEventListener("input",vis_speed);//listen for the input of the speed


//functino that uses a switch statment to get the speed of the
function vis_speed(){
    //setting the speed of the array
    var array_speed = document.getElementById("a_speed").value;
    //switch statement to find out the speed
    switch(parseInt(array_speed))
    {
        case 1: speed=1;
                speed = 10
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    
    delay_time=10000/(Math.floor(sizeArr/10)*speed);//Decrease numerator to increase speed.
}

var delay_time=10000/(Math.floor(sizeArr/10)*speed);//Decrease numerator to increase speed.
var c_delay=0;//This is updated ov every div change so that visualization is visible.


//important function to edit the display of the block according the the sorting algorithm, i will have to place this
//function strageically to edit the block
function updateDisplay(cont, color, height){

    window.setTimeout(function(){

        cont.style=" margin:0% " + margin_size + "%; width:" + (100/sizeArr-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color +  ";";
    },c_delay+=delay_time);

}
//function to enable the buttons
function enable_buttons(){
    
    window.setTimeout(function(){
        for(var i=0;i<ButtonAlgs.length;i++)
        {
            
            ButtonAlgs[i].classList=[];
            ButtonAlgs[i].classList.add("butt_unselected");

            //set the buttons disabled to false to it is unpressable
            ButtonAlgs[i].disabled=false;
            newArr.disabled=false;
            inpSize.disabled=false;
            inpSpeed.disabled=false;
        }

    },c_delay+=delay_time);
}

