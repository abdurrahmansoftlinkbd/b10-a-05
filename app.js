// global
const historyBtn = document.getElementById("history-btn");
const donationBtn = document.getElementById("donation-btn");
const donateSection = document.getElementById("donate-section");
const historySection = document.getElementById("history-section");

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
