const cartItems = document.getElementById('cartItems');
const cartList = document.getElementById('cartList');
const cartTotal = document.getElementById('cartTotal');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
let iconCart = document.querySelector('.cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');

let cartCount = 0;
let totalAmount = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const price = parseFloat(button.getAttribute('data-price'));
    cartCount++;
    cartItems.innerText = cartCount;

    totalAmount += price;
    cartTotal.innerText = `$${totalAmount.toFixed(2)}`;

    const listItem = document.createElement('li');
    listItem.innerText = `products(₹${price.toFixed(2)})`;
    cartList.appendChild(listItem);
  });
});

iconCart.addEventListener('click',() => {
    body.classList.toggle('showCart');
})

closeCart.addEventListener('click',() => {
    body.classList.toggle('showCart');
})
document.addEventListener("DOMContentLoaded", () => {
  const selectLocationBtn = document.getElementById("select-location-btn");
  const locationDropdown = document.getElementById("location-dropdown");
  const closeDropdownMark = document.getElementById("close-dropdown");

  // Toggle the dropdown visibility when the select location button is clicked
  selectLocationBtn.addEventListener("click", () => {
      locationDropdown.style.display = "block";
  });

  // Close the dropdown when the close mark (×) is clicked
  closeDropdownMark.addEventListener("click", () => {
      locationDropdown.style.display = "none";
  });

  // Close the dropdown when clicking outside of it
  document.addEventListener("click", (event) => {
      const isClickInside = locationDropdown.contains(event.target) || selectLocationBtn.contains(event.target);
      if (!isClickInside) {
          locationDropdown.style.display = "none";
      }
  });
});
document.getElementById('loginLink').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent navigation to login.html
  alert('The page is under maintenance.');
});
document.getElementById('videbtn').addEventListener('click', function() {
  alert('The video is not available.');
});

