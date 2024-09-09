let formPrint = document.getElementById("formPrint");

function printContent() {
  window.print();
}

formPrint.addEventListener("click", printContent);