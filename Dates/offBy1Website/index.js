"use strict"

window.onload = init;

function init(){

    let btnClicked = document.getElementById("btnClicked");
    btnClicked.onclick = btnClickedTrue;
    
}

function btnClickedTrue(){

    let inputDate = document.getElementById("inputDate");
    let displayDate = document.getElementById("displayDate");

    let dateValue = new Date(inputDate.value);

    displayDate.innerHTML = dateValue.toString();

}

