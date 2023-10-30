window.onload = function() {

    // // form will submit everytime it changes
    // let form = document.querySelector('form');
    // form.onchange = submitBtnClicked;

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
  
    // Define the maximum occupancy for each room type
    const maxOccupancy = {
      Queen: 5,
      King: 2,
      "2-Bedroom Suite": 6,
    };
  
    // Check if the selected room type can accommodate the number of guests
    if (adults + children > maxOccupancy[roomType]) {
      const messageDiv = document.getElementById("messageDiv");
      messageDiv.textContent = "The room you selected will not hold your party.";
      // Clear previous cost calculations
      clearCostCalculations();
    } else {
      clearCostCalculations(); // Clear any previous message
      const roomRate = getRoomRate(checkinDate, roomType);
      const nights = Number(document.getElementById("nights").value);
      const totalRoomCost = roomRate * nights;
      
      let discountPercentage = 0;
      if (discount === "aaa/senior") {
        discountPercentage = 0.1;
      } else {
        discountPercentage = 0.2;
      }
      
      const discountAmount = discountPercentage * totalRoomCost;
      const taxRate = 0.12;
      const taxAmount = taxRate * (totalRoomCost - discountAmount);
      const totalCost = totalRoomCost - discountAmount + taxAmount;
  
      // Display the calculated values
      document.getElementById("originalRoomCost").textContent = "Room Cost: $" + totalRoomCost.toFixed(2);
      document.getElementById("discountAmount").textContent = "Discount: $" + discountAmount.toFixed(2);
      document.getElementById("discountedRoomCost").textContent = "Discounted Room Cost: $" + (totalRoomCost - discountAmount).toFixed(2);
      document.getElementById("taxAmount").textContent = "Tax: $" + taxAmount.toFixed(2);
      document.getElementById("totalCost").textContent = "Total Stay: $" + totalCost.toFixed(2);
    }
  }
  
  function clearCostCalculations() {
    const messageDiv = document.getElementById("messageDiv");
    messageDiv.textContent = "";
    document.getElementById("originalRoomCost").textContent = "Room Cost: $0.00";
    document.getElementById("discountAmount").textContent = "Discount: $0.00";
    document.getElementById("discountedRoomCost").textContent = "Discounted Room Cost: $0.00";
    document.getElementById("taxAmount").textContent = "Tax: $0.00";
    document.getElementById("totalCost").textContent = "Total Stay: $0.00";
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
  
 
  
  