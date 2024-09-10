let formPrint = document.getElementById("formPrint");
let printSection = document.getElementById("printSection");
// printSection.style.display = "none";

// Input Values

let  title = document.getElementById("title");
let  consumerName = document.getElementById("consumerName");
let  consumerNumber = document.getElementById("consumerNumber");
let  consumerCity = document.getElementById("consumerCity");
let  consumerAddress = document.getElementById("consumerAddress");
let  agreementOffice = document.getElementById("agreementOffice");
let  agreementDate = document.getElementById("agreementDate");
let  solarCapacity = document.getElementById("solarCapacity");
let  witness1 = document.getElementById("witness1");
let  witness2 = document.getElementById("witness2");


// Output Values

let title1 = document.getElementById("title1");
let title2 = document.getElementById("title2");
let title3 = document.getElementById("title3");

let consumerName1 = document.getElementById("consumerName1");
let consumerName2 = document.getElementById("consumerName2");
let consumerName3 = document.getElementById("consumerName3");

let consumerNumber1 = document.getElementById("consumerNumber1");
let consumerCity1 = document.getElementById("consumerCity1");
let consumerAdress1 = document.getElementById("consumerAdress1");
let agreementOffice1 = document.getElementById("agreementOffice1");
let agreementDate1 = document.getElementById("agreementDate1");
let solarCapacity1 = document.getElementById("solarCapacity1");

let witness11 = document.getElementById("witness11");
let witness22 = document.getElementById("witness22");


function printContent() {

  title1.innerText = title.value;
  title2.innerText = title.value;
  title3.innerText = title.value;

  consumerName1.innerText = consumerName.value;
  consumerName2.innerText = consumerName.value;
  consumerName3.innerText = consumerName.value;

  consumerNumber1.innerText = consumerNumber.value;
  consumerCity1.innerText = consumerCity.value;
  consumerAdress1.innerText = consumerAddress.value;
  agreementOffice1.innerText = agreementOffice.value;
  agreementDate1.innerText = agreementDate.value;
  solarCapacity1.innerText = solarCapacity.value;

  witness11.innerText = witness1.value;
  witness22.innerText = witness2.value;

  printSection.classList.toggle("visible");
  

  window.print();
}

formPrint.addEventListener("click", printContent);
