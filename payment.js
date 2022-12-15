// Nav Section

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
  let menuToggle = document.querySelector(".menuToggle");
  let navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

function totalPay() {
  let total = document.querySelector(".total-price").value;
  let pay = total;
  document.querySelector("total-pay").innerText = `£${pay}`;
}

console.log(totalPay);
