const homeBtn = document.getElementById("home-btn");
const navCenter = document.getElementById("nav-center");

// homeBtn
homeBtn.addEventListener("click", function () {
  window.location.href = "./index.html";
  homeBtn.innerText = "Blog";
});
// navCenter
navCenter.addEventListener("click", function () {
  window.location.href = "./index.html";
});
