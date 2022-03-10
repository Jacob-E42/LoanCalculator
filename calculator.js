window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  let monthlyPayment;

  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmount = document.querySelector("#loan-amount");
  const loanYears = document.querySelector("#loan-years");
  const loanRate = document.querySelector("#loan-rate");

  loanAmount.value = 10000;
  loanYears.value = 4;
  loanRate.value = .05;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(values));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principal = values.amount;
  let interestRate = values.rate;
  let years = values.years;

  let payment = ((principal * (interestRate / 12)) / (1 - ((1 + (interestRate / 12)) ** -(years * 12))));
  
  let roundedPayment = Math.round((payment + Number.EPSILON) * 100) / 100;
  return roundedPayment.toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let payment = document.querySelector("#monthly-payment");
  payment.innerText = `Your monthly payment is: $${monthly}`
}



//Source of rounding solution
// https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary