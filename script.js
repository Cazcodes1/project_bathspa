// Nav Section

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
  const menuToggle = document.querySelector(".menuToggle");
  const navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

// Cart section

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// Open my cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};
// Close my cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

// Cart Working JS

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  // Remove items from cart
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
}

// Remove items from Cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  // updateTotal();
}

// Update total

// function updateTotal ()
// var cartContent = document.getElementsByClassName("cart-content")[0];
// var cartBoxes = cartContent.getElementsByClassName("cart-box");
// var total = 0;

// for (var i = 0; i < cartBoxes.length; i++){
//   var cartBox = cartBoxes[i];
//   var priceElement = cartBox.getElementsByClassName(".cart-price")[0];
//   var quantityElement = cartBox.getElementsByClassName(".cart-quantity")[0];
//   var price = parseFloat(priceElement.innerText.replace("£", ""));
//   var quantity = quantityElement.value;
//   total = total + (price * quantity);
// document.getElementsByClassName('total-price')[0].innerText = '£' + total;
// };
