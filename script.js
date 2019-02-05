// Get elements
var totalAmountInput = document.getElementById("total-amount");
var serviceRateInput = document.getElementById("service-rate");
var shareInput = document.getElementById("share");
var calculateBtnInput = document.getElementById("calculate-btn");
var resultBox = document.getElementById("result-box");

// Variables for calculation
var totalAmount = 0;
var serviceRate = 0;
var share = 0;
var tipAmount = 0;
var reaction = "";

calculateBtnInput.onclick = function() {
  totalAmount = totalAmountInput.value;

  serviceRate = serviceRateInput.options[serviceRateInput.selectedIndex].value;

  share = shareInput.value;

  tipAmount = (totalAmount * serviceRate) / 100 / share;

  tipAmount = tipAmount.toFixed(2);

  // Error check
  var isValid = false;
  if (!totalAmount || serviceRate == 0 || !share) {
    alert("Enter all values");
    isValid = true;
  }

  // Reaction
  if (serviceRate == 30) {
    reaction = "<i class='far fa-grin-beam fa-2x'></i>";
  } else if (serviceRate == 20) {
    reaction = "<i class='far fa-smile fa-2x'></i>";
  } else if (serviceRate == 15) {
    reaction = "<i class='far fa-meh-blank fa-2x'></i>";
  } else if (serviceRate == 10) {
    reaction = "<i class='far fa-frown fa-2x'></i>";
  } else if (serviceRate == 5) {
    reaction = "<i class='far fa-angry fa-2x'></i>";
  }

  // Display tip amount
  if (isValid == false) {
    resultBox.innerHTML =
      "<h2>TIP AMOUNT</h2><p>" +
      reaction +
      "</p><span id='tip'>" +
      tipAmount +
      " $</span><br>" +
      "each";
  } else {
    resultBox.innerHTML = "";
  }
};
