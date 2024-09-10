let formPrint = document.getElementById("formPrint");
let printSection = document.getElementById("printSection");
printSection.style.display = "none";
function printContent() {
  printSection.style.display = "block";
  window.print();
}

formPrint.addEventListener("click", printContent);
