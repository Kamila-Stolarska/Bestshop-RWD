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
const terminalRental = document.getElementById("rental");
const resultButton = document.getElementById("totals");
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

terminalRental.addEventListener("input", (event) => {
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
  let res = 0;

  for (let i = 0; i < lineTotalNodeList.length; i++) {
    res += Number(lineTotalNodeList[i].dataset.value);
  }

  resultButton.textContent = "$" + res;
}

const buttonForPricing = document.querySelectorAll(".button-pricing");
const popupCalculator = document.querySelector(".pop-up");
const close = document.querySelector(".close");

buttonForPricing.forEach(function (buttonForPrice) {
  buttonForPrice.addEventListener("click", function () {
    popupCalculator.classList.add("active");

    let targetOption = document.querySelector(
      `.dropdown [data-value='${this.dataset.value}']`
    );
    targetOption.click();
    targetOption.parentElement.classList.remove("open");
    popupCalculator.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
});

close.addEventListener("click", () => {
  popupCalculator.classList.remove("active");
  productsQty.value = "";
  monthlyOrders.value = "";

  if (accounting.checked) {
    accounting.click();
  }
  if (terminalRental.checked) {
    terminalRental.click();
  }
  lineTotalNodeList.forEach(function (lineTotal) {
    if (!lineTotal.classList.contains("totals-wrapper")) {
      lineTotal.querySelector(".line-total").dataset.value = "";
      lineTotal.classList.add("hidden");
    }
  });
  resultButton.textContent = "0";

  document.querySelector("section.pricing").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

// navigation scroll
const links = document.querySelectorAll("header [data-link]");

links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetSectionOffset =
      document.querySelector(`section[data-link='${this.dataset.link}']`)
        .offsetTop - 70;

    window.scroll({
      top: targetSectionOffset,
      behavior: "smooth",
    });

    let mobileMenuActive = document.querySelector("header ul.active");
    if (mobileMenuActive) {
      mobileMenuActive.classList.remove("active");
    }
  });
});
