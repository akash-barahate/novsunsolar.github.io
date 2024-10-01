let consumerName = document.getElementById("consumerName");
let consumerNumber = document.getElementById("consumerNumber");
let consumerAddress = document.getElementById("consumerAddress");
let dateOn = document.getElementById("dateOn");

// Output
let consumerName1 = document.getElementById("consumerName1");
let consumerName2 = document.getElementById("consumerName2");

let consumerNumber1 = document.getElementById("consumerNumber1");
let consumerAddress1 = document.getElementById("consumerAddress1");

let dateOn1 = document.getElementById("dateOn1");

function printContent() {
  consumerName1.innerText = consumerName.value;
  consumerName2.innerText = consumerName.value;
  consumerNumber1.innerText = consumerNumber.value;
  consumerAddress1.innerText = consumerAddress.value;
  consumerAddress2.innerText = consumerAddress.value;
  dateOn1.innerText = dateOn.value;

  window.print();
}
