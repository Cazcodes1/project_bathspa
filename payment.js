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

// Not working

<<<<<<< HEAD
// function totalPay() {
//   let totalStoragePrice = localStorage.setItem("totalPrice", total);
//   document.querySelector("total-price")[0].innerHtml = localStorage.getItem(
//     "£" + totalStoragePrice
//   );
// }
=======

function totalPay() {
  document.querySelector(".total-pay").innerText = "£" + JSON.parse(window.localStorage.getItem("totalPrice")).toFixed(2);
    

}

totalPay()
>>>>>>> parent of 4d59109 (updated payment with alert msg)
