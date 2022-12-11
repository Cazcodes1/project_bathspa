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

let cartIcon = document.getElementById("cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.getElementById("close-cart");

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

// Making Function

function ready() {
  // Remove items from cart
  const removeCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removeCartButtons);
  for (const i = 0; i < removeCartButtons.length; i++) {
    const button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
}

// Remove items from Cart
function removeCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.parentElement.remove();
}
