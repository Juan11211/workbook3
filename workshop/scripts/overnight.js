window.onload = function() {
    let submitBtn = document.getElementById("submitBtn");
    submitBtn.onclick = submitBtnClicked;
  }


  function submitBtnClicked(event) {
    console.log("Button clicked");
    event.preventDefault();

    const checkinDate = document.getElementById("checkin").value;
    const roomType = document.querySelector('input[name="roomType"]:checked').value;
    const discount = document.querySelector('input[name="discount"]:checked').value;
    const adults = Number(document.getElementById("adults").value);
    const children = Number(document.getElementById("children").value);
    const messageDiv = document.getElementById("messageDiv");
    const confirmationNumberDiv = document.getElementById("confirmationNumber"); // Get confirmation number div

    // Define the maximum occupancy for each room type
    const maxOccupancy = {
      Queen: 5,
      King: 2,
      "2-Bedroom Suite": 6,
    };

    const roomRate = getRoomRate(checkinDate, roomType);
    const nights = Number(document.getElementById("nights").value);
    
    // Calculate the total room cost, discount, tax, and total cost
    let totalRoomCost = 0;
    let discountAmount = 0;
    let taxAmount = 0;
    let totalCost = 0;

    if (adults + children <= maxOccupancy[roomType]) {
      totalRoomCost = roomRate * nights;
      let discountPercentage = 0;
      if (discount === "aaa/senior") {
        discountPercentage = 0.1;
      } else if (discount === "military") {
        discountPercentage = 0.2;
      }
      discountAmount = discountPercentage * totalRoomCost;
      
      const taxRate = 0.12;
      taxAmount = taxRate * (totalRoomCost - discountAmount);
      totalCost = totalRoomCost - discountAmount + taxAmount;
      messageDiv.innerText = ""; // Clear the message if the room can hold the party
    } else {
      messageDiv.innerText = "The room you selected will not hold your party.";
      confirmationNumberDiv.innerText = ""; // Clear the confirmation number when the room is full
    }

    // Display the calculated values as before
    document.getElementById("originalRoomCost").textContent = "Room Cost: $" + totalRoomCost.toFixed(2);
    document.getElementById("discountAmount").textContent = "Discount: $" + discountAmount.toFixed(2);
    document.getElementById("discountedRoomCost").textContent = "Discounted Room Cost: $" + (totalRoomCost - discountAmount).toFixed(2);
    document.getElementById("taxAmount").textContent = "Tax: $" + taxAmount.toFixed(2);
    document.getElementById("totalCost").textContent = "Total Stay: $" + totalCost.toFixed(2);

    if (adults + children <= maxOccupancy[roomType]) {
      const name = document.getElementById("name").value;
      const date = new Date(checkinDate);
      const monthYear = (date.getMonth() + 1).toString().padStart(2, "0") + date.getFullYear();
      const stayDays = nights;
      const confirmationNumber = `${name.substr(0, 3)}-${monthYear}-${stayDays}:${adults}:${children}`;

      // Display the confirmation number 
      confirmationNumberDiv.textContent = "Confirmation Number: " + confirmationNumber;
    }
}


  /// passing in checkIn and roomType
  function getRoomRate(checkinDate, roomType) {

    // defining expensive season
    const inSeasonRates = {
      Queen: 250.00,
      King: 250.00,
      "2-Bedroom Suite": 350.00,
    };
  
    // rest of the year
    const outOfSeasonRates = {
      Queen: 150.00,
      King: 150.00,
      "2-Bedroom Suite": 210.00,
    };
  
    // check in date, off by 1 so +1
    const checkinMonth = new Date(checkinDate).getMonth() + 1;

    // we want to make sure inSeason is between the 6 month and the 8th . 
    const isSeasonIn = checkinMonth >= 6 && checkinMonth <= 8;
  
    // define room price
    let roomRate;

    if (isSeasonIn) {
      if (roomType === "Queen") {
        roomRate = inSeasonRates.Queen;
      } else if (roomType === "King") {
        roomRate = inSeasonRates.King;
      } else if (roomType === "2-Bedroom Suite") {
        roomRate = inSeasonRates["2-Bedroom Suite"];
      }
    } else {
      if (roomType === "Queen") {
        roomRate = outOfSeasonRates.Queen;
      } else if (roomType === "King") {
        roomRate = outOfSeasonRates.King;
      } else if (roomType === "2-Bedroom Suite") {
        roomRate = outOfSeasonRates["2-Bedroom Suite"];
      }
    }
  
    return roomRate;
  }
  
 
  
  