// global variables
const historyBtn = document.getElementById("history-btn");
const donationBtn = document.getElementById("donation-btn");
const donateSection = document.getElementById("donate-section");
const historySection = document.getElementById("history-section");
const donateNoakhali = document.getElementById("donate-noakhali");
let totalAmount = parseFloat(document.getElementById("total-amount").innerText);
const donateFeni = document.getElementById("donate-feni");

// historyBtn
historyBtn.addEventListener("click", function () {
  historyBtnClassAdd("bg-lime-300", "border-lime-300");
  historyBtn.classList.remove("bg-transparent");
  donationBtn.classList.remove("bg-lime-300", "border-lime-300");
  donationBtn.classList.add("bg-transparent", "border-gray1");
  donateSection.classList.add("hidden");
  historySection.classList.remove("hidden");
});
// historyBtn functionality
function historyBtnClassAdd(bg, border) {
  historyBtn.classList.add(bg, border);
}

// donationBtn
donationBtn.addEventListener("click", function () {
  donationBtn.classList.add("bg-lime-300", "border-lime-300");
  donationBtn.classList.remove("bg-transparent");
  historyBtn.classList.remove("bg-lime-300", "border-lime-300");
  historyBtnClassAdd("bg-transparent", "border-gray1");
  historySection.classList.add("hidden");
  donateSection.classList.remove("hidden");
});

// donateNoakhali
donateNoakhali.addEventListener("click", function () {
  // variables
  const inputNoakhali = document.getElementById("input-noakhali");
  let inputNoakhaliValue = parseFloat(inputNoakhali.value);
  // condition
  if (inputNoakhaliValue <= 0 || isNaN(inputNoakhaliValue)) {
    return alert("Invalid amount.");
  } else if (inputNoakhaliValue > totalAmount) {
    return alert("You don't have enough money");
  }
  // currentAmount
  let currentAmount = totalAmount - inputNoakhaliValue;
  totalAmount = currentAmount;
  document.getElementById("total-amount").innerText = currentAmount;
  // reset input field
  inputNoakhali.value = "";
  // updatedAmount
  let updatedAmountEl = parseFloat(
    document.getElementById("updated-amount").innerText
  );
  let updatedAmount = updatedAmountEl + inputNoakhaliValue;
  updatedAmountEl = updatedAmount;
  document.getElementById("updated-amount").innerText = updatedAmount;
  // hide initial history
  document.getElementById("historyHide").classList.remove("hidden");
  // history description
  const historyDesc = document.getElementById("history-desc");
  const historyDiv = document.createElement("div");
  historyDiv.innerHTML += `
    <h1 class="text-xl font-bold">
                  ${inputNoakhaliValue} Taka is Donated for Flood at Noakhali, Bangladesh.
    </h1>
    <p class="text-secondary font-light">
        Date : ${new Date()}
    </p>
  `;
  historyDesc.insertBefore(historyDiv, historyDesc.firstChild);
});

// donateFeni
donateFeni.addEventListener("click", function () {
  // variables
  const inputFeni = document.getElementById("input-feni");
  const inputFeniValue = parseFloat(inputFeni.value);
  // condition
  if (inputFeniValue <= 0 || isNaN(inputFeniValue)) {
    return alert("Invalid amount.");
  } else if (inputFeniValue > totalAmount) {
    return alert("You don't have enough money");
  }
  // currentAmount
  let currentAmount = totalAmount - inputFeniValue;
  totalAmount = currentAmount;
  document.getElementById("total-amount").innerText = currentAmount;
  // reset input field
  inputFeni.value = "";
  // updatedAmount
  const updatedAmountFeni = document.getElementById("updated-amount-feni");
  let updatedAmountFeniValue = parseFloat(updatedAmountFeni.innerText);
  let updatedAmount = updatedAmountFeniValue + inputFeniValue;
  updatedAmountFeniValue = updatedAmount;
  updatedAmountFeni.innerText = updatedAmount;
  // hideInitialHistory
  document.getElementById("historyHide").classList.remove("hidden");
  // historyDesc
  const historyDesc = document.getElementById("history-desc");
  const historyDiv = document.createElement("div");
  historyDiv.innerHTML += `
    <h1 class="text-xl font-bold">
                  ${inputFeniValue} Taka is Donated for Flood Relief in Feni,Bangladesh.
    </h1>
    <p class="text-secondary font-light">
        Date : ${new Date()}
    </p>
  `;
  historyDesc.insertBefore(historyDiv, historyDesc.firstChild);
});

// donateQuota
