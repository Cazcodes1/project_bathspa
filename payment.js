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
  document.querySelector(".total-pay").innerText = "£" + JSON.parse(window.localStorage.getItem("totalPrice")).toFixed(2);
    

}

totalPay()

let button = document.querySelector(".payment");

function thanksOrder () {
  button.onclick = alert ("Thank you!  Your order has been placed! The Direct Films Team");
}
