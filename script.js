// generate pin
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    // console.log('got 3 digit and calling again', pin);
    return getPin();
  }
}
function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}

// match pin part

let button = Array.from(document.querySelectorAll(".button"));
let calInput = document.querySelector("#typed-number");
button.map((button) => {
  button.addEventListener("click", function (e) {
    switch (e.target.innerText) {
      case "C":
        calInput.value = "";
        break;
      case "<":
        calInput.value = calInput.value.slice(0, -1);
        break;
      default:
        calInput.value += e.target.innerText;
        break;
    }
    return;
  });
});

// verify part
function verifyPin() {
  const pin = document.querySelector("#display-pin").value;
  const typedNumbers = document.querySelector("#typed-number").value;
  let successMessage = document.querySelector(".notify-success");
  let failError = document.querySelector(".notify-fail");
  if (pin == typedNumbers) {
    successMessage.style.display = "block";
    failError.style.display = "none";
  } else {
    failError.style.display = "block";
    successMessage.style.display = "none";
  }
}
