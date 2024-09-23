// global
const historyBtn = document.getElementById("history-btn");
const donationBtn = document.getElementById("donation-btn");
const donateSection = document.getElementById("donate-section");
const historySection = document.getElementById("history-section");
const inputNoakhali = document.getElementById("input-noakhali");
const donateNoakhali = document.getElementById("donate-noakhali");
const totalAmount = parseFloat(
  document.getElementById("total-amount").innerText
);
let updatedAmountEl = parseFloat(
  document.getElementById("updated-amount").innerText
);
let sum = 0;

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
  let inputNoakhaliValue = parseFloat(inputNoakhali.value);
  if (inputNoakhaliValue <= 0 || isNaN(inputNoakhaliValue)) {
    return alert("Invalid amount.");
  } else if (inputNoakhaliValue > totalAmount) {
    return alert("You don't have enough money");
  }

  const currentAmount = totalAmount - inputNoakhaliValue;
  document.getElementById("total-amount").innerText = currentAmount;

  inputNoakhali.value = "";

  let updatedAmount = updatedAmountEl + inputNoakhaliValue;
  updatedAmountEl = updatedAmount;

  document.getElementById("updated-amount").innerText = updatedAmount;

  document.getElementById("historyHide").classList.remove("hidden");

  const historyDesc = document.getElementById("history-desc");
  const historyDiv = document.createElement("div");
  historyDiv.innerHTML += `
    <h1 class="text-xl font-bold">
                  ${updatedAmount} Taka is Donated for Flood at Noakhali, Bangladesh.
    </h1>
    <p class="text-secondary font-light">
        Date : ${new Date()}
    </p>
  `;
  historyDesc.insertBefore(historyDiv, historyDesc.firstChild);
});
