const barsIcon = document.querySelector(".hamburger-icon");
const navList = document.querySelector("nav ul");

barsIcon.addEventListener("click", function () {
  navList.classList.toggle("active");
});

//Calculator

//Global variables
const selectedOption = document.querySelector(".selected-option");
const dropdown = document.querySelector(".custom-select .dropdown");
const dropdownOptions = document.querySelectorAll(".dropdown div");

const productsQty = document.getElementById("quantity");
const monthlyOrders = document.getElementById("orders");
const accounting = document.getElementById("accounting");
const termianlRental = document.getElementById("rental");
const lineTotalNodeList = document.querySelectorAll(".calculator div");

const productPrice = 0.5;
const orderPrice = 0.25;

selectedOption.addEventListener("click", function () {
  dropdown.classList.toggle("open");
});

for (let i = 0; i < dropdownOptions.length; i++) {
  dropdownOptions[i].addEventListener("click", function () {
    selectedOption.textContent = dropdownOptions[i].textContent;
    selectedOption.style.color = "#000000";
    selectedOption.dataset.value = dropdownOptions[i].dataset.value;
    let packageName = lineTotalNodeList[2].querySelector(".calc");
    let lineTotal = lineTotalNodeList[2].querySelector(".line-total");

    packageName.textContent = dropdownOptions[i].textContent;
    lineTotal.textContent = "$" + dropdownOptions[i].dataset.value;
    lineTotal.dataset.value = dropdownOptions[i].dataset.value;
    lineTotalNodeList[2].className = "";
    updateTotal();

    dropdown.classList.toggle("open");
  });
}

//Calculations

productsQty.addEventListener("input", (event) => {
  let lineTotal = lineTotalNodeList[0].querySelector(".line-total");
  if (event.target.value && event.target.value > 0) {
    let calculations = lineTotalNodeList[0].querySelector(".calc");
    let res = event.target.value * productPrice;

    calculations.textContent = `${event.target.value} * $${productPrice}`;
    lineTotal.textContent = "$" + res;
    lineTotal.dataset.value = res;
    lineTotalNodeList[0].className = "";
  } else {
    lineTotal.textContent = "";
    lineTotal.dataset.value = "";
    lineTotalNodeList[0].className = "hidden";
  }
  updateTotal();
});

monthlyOrders.addEventListener("input", (event) => {
  let lineTotal = lineTotalNodeList[1].querySelector(".line-total");

  if (event.target.value && event.target.value > 0) {
    let calculations = lineTotalNodeList[1].querySelector(".calc");
    let res = event.target.value * productPrice;

    calculations.textContent = `${event.target.value} * $${orderPrice}`;
    lineTotal.textContent = "$" + res;
    lineTotal.dataset.value = res;
    lineTotalNodeList[1].className = "";
  } else {
    lineTotal.textContent = "";
    lineTotal.dataset.value = "";
    lineTotalNodeList[1].className = "hidden";
  }
  updateTotal();
});

accounting.addEventListener("input", (event) => {
  let lineTotal = lineTotalNodeList[3].querySelector(".line-total");
  if (event.target.checked) {
    let res = event.target.value;
    lineTotal.textContent = "$" + res;
    lineTotal.dataset.value = res;
    lineTotalNodeList[3].className = "";
  } else {
    lineTotal.textContent = "";
    lineTotal.dataset.value = "";
    lineTotalNodeList[3].className = "hidden";
  }
  updateTotal();
});

termianlRental.addEventListener("input", (event) => {
  let lineTotal = lineTotalNodeList[4].querySelector(".line-total");
  if (event.target.checked) {
    let res = event.target.value;
    lineTotal.textContent = "$" + res;
    lineTotal.dataset.value = res;
    lineTotalNodeList[4].className = "";
  } else {
    lineTotal.textContent = "";
    lineTotal.dataset.value = "";
    lineTotalNodeList[4].className = "hidden";
  }
  updateTotal();
});

function updateTotal() {
  let lineTotalNodeList = document.querySelectorAll(".line-total");
  const resultButton = document.getElementById("totals");
  let res = 0;

  for (let i = 0; i < lineTotalNodeList.length; i++) {
    res += Number(lineTotalNodeList[i].dataset.value);
  }

  resultButton.textContent = "$" + res;
}