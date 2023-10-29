"use strict"

window.onload = function(){

      let submitBtn = document.getElementById("submitBtn");
      submitBtn.onclick = submitBtnClicked;
}

function submitBtnClicked(){
    let checkin = Number(document.getElementById("checkin").value);
    let nights = Number(document.getElementById("nights").value);
    let selectedRoomType = document.querySelector("name=['roomType']:checked");
    let children = Number(document.getElementById("children").value);
    let adults = Number(document.getElementById("adults").value)
    let selectedDiscount = document.querySelector("name=['discount']:checked");

    let roomPrice = 0; 

    if(checkin > 5 && checkin < 9){
        roomPrice += 250
    } else {
        roomPrice += 150
    }

    let discountedPrice = 0;

    if(selectedDiscount.value == "aaa/senior"){
        discountedPrice += 0.010;
    } else if(selectedDiscount == "military"){
        discountedPrice += 0.020;
    } else {
        discountedPrice
    }

    let roomPriceWithDiscount = roomPrice * discountedPrice;

    let taxes = 0.012;

    


}