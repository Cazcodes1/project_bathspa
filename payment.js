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

// function totalPay() {
//   let totalStoragePrice = localStorage.setItem("totalPrice", total);
//   document.querySelector("total-price")[0].innerHtml = localStorage.getItem(
//     "£" + totalStoragePrice
//   );
// }
