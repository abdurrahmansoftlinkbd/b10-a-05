// global variables
const historyBtn = document.getElementById("history-btn");
const donationBtn = document.getElementById("donation-btn");
const donateSection = document.getElementById("donate-section");
const historySection = document.getElementById("history-section");
let totalAmount = parseFloat(document.getElementById("total-amount").innerText);
const donateNoakhali = document.getElementById("donate-noakhali");
const donateFeni = document.getElementById("donate-feni");
const donateQuota = document.getElementById("donate-quota");

// common functions
function historyDesc(inputValue, title) {
  const historyDesc = document.getElementById("history-desc");
  const historyDiv = document.createElement("div");
  historyDiv.innerHTML += `
    <h1 class="text-xl font-bold">
      ${inputValue} Taka is Donated for ${title}
    </h1>
    <p class="text-secondary font-light">
    Date : ${new Date()}
    </p>
    `;
  historyDesc.insertBefore(historyDiv, historyDesc.firstChild);
}
function currentAmount(inputNumValue) {
  let currentAmount = totalAmount - inputNumValue;
  totalAmount = currentAmount;
  document.getElementById("total-amount").innerText = currentAmount;
}

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
donateNoakhali.onclick = null;
donateNoakhali.addEventListener("click", function () {
  // variables
  const inputNoakhali = document.getElementById("input-noakhali");
  let inputNoakhaliValue = parseFloat(inputNoakhali.value);
  const title = "Flood at Noakhali, Bangladesh.";
  // condition
  if (
    inputNoakhaliValue <= 0 ||
    isNaN(inputNoakhaliValue) ||
    isNaN(inputNoakhali.value)
  ) {
    inputNoakhali.value = "";
    return alert("Invalid amount.");
  } else if (inputNoakhaliValue > totalAmount) {
    inputNoakhali.value = "";
    return alert("You don't have enough money");
  }
  // display modal
  donateNoakhali.onclick = my_modal_1.showModal();
  // currentAmount
  currentAmount(inputNoakhaliValue);
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
  historyDesc(inputNoakhaliValue, title);
});

// donateFeni
donateFeni.onclick = null;
donateFeni.addEventListener("click", function () {
  // variables
  const inputFeni = document.getElementById("input-feni");
  const inputFeniValue = parseFloat(inputFeni.value);
  let title = "Flood Relief in Feni,Bangladesh.";
  // condition
  if (inputFeniValue <= 0 || isNaN(inputFeniValue) || isNaN(inputFeni.value)) {
    inputFeni.value = "";
    return alert("Invalid amount.");
  } else if (inputFeniValue > totalAmount) {
    inputFeni.value = "";
    return alert("You don't have enough money");
  }
  // display modal
  donateFeni.onclick = my_modal_1.showModal();
  // currentAmount
  currentAmount(inputFeniValue);
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
  historyDesc(inputFeniValue, title);
});

// donateQuota
donateQuota.onclick = null;
donateQuota.addEventListener("click", function () {
  // variables
  const inputQuota = document.getElementById("input-quota");
  let inputQuotaValue = parseFloat(inputQuota.value);
  let title = "Injured in the Quota Movement.";
  // condition
  if (
    inputQuotaValue <= 0 ||
    isNaN(inputQuota.value) ||
    isNaN(inputQuotaValue)
  ) {
    inputQuota.value = "";
    return alert("Invalid amount.");
  } else if (inputQuotaValue > totalAmount) {
    inputQuota.value = "";
    return alert("You don't have enough money");
  }
  // display modal
  donateQuota.onclick = my_modal_1.showModal();
  // currentAmount
  currentAmount(inputQuotaValue);
  // reset input field
  inputQuota.value = "";
  // updatedAmount
  const updatedAmountQuota = document.getElementById("updated-amount-quota");
  let updatedAmountQuotaValue = parseFloat(updatedAmountQuota.innerText);
  let updatedAmount = updatedAmountQuotaValue + inputQuotaValue;
  updatedAmountQuotaValue = updatedAmount;
  updatedAmountQuota.innerText = updatedAmount;
  // hideInitialHistory
  document.getElementById("historyHide").classList.remove("hidden");
  // historyDesc
  historyDesc(inputQuotaValue, title);
});
