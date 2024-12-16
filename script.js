const cart = [];
let cartCount = 0;
let totalPrice = 0;

// DOM Elements

const mainImage = document.getElementById('main-image');
const colorButtons = document.querySelectorAll('.color-btn');
const sizeButtons = document.querySelectorAll('.size-btn');
const addToCartBtn = document.getElementById('add-to-cart-btn');
const cartCountEl = document.getElementById('cart-count');
const checkoutBtn = document.getElementById('checkout-btn');
const cartModal = document.getElementById('cart-modal');
const cartItemsTable = document.getElementById('cart-items');
const totalEl = document.getElementById('total-price');
const continueShoppingBtn = document.getElementById('continue-shopping');

let selectedColor = 'Black';
let selectedSize = 'S';
let selectedPrice = '79'


// Change Main Thumbnail Based on Color
colorButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const imageSrc = btn.dataset.image;
    selectedColor = btn.dataset.color;
    mainImage.src = imageSrc;
  });
});

// Select Wrist Size
sizeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    selectedSize = btn.dataset.size;
  });
});

sizeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    selectedPrice = price;
  });
});

console.log(selectedPrice)
// Add to Cart Functionality
addToCartBtn.addEventListener('click', () => {
  const price = 79;
  cart.push({ name: 'Classy Modern Smart Watch', color: selectedColor, size: selectedSize, price: price*quantity });
  cartCount++;
  totalPrice += price*quantity;

  cartCountEl.textContent = cartCount;
  checkoutBtn.style.display = 'block';
});

// Show Cart Modal
checkoutBtn.addEventListener('click', () => {
  cartModal.classList.remove('hidden');
  renderCart();
});

// Render Cart Items
function renderCart() {
  let rows = '';
  cart.forEach((item, index) => {
    rows += `
      <tr>
        <td>${item.name}</td>
        <td>${item.color}</td>
        <td>${item.size}</td>
        <td>${quantity}</td>
        <td>$${item.price.toFixed(2)}</td>
      </tr>
    `;
  });
  cartItemsTable.innerHTML = `
    <tr>
      <th>Item</th>
      <th>Color</th>
      <th>Size</th>
      <th>Qty</th>
      <th>Price</th>
    </tr>
    ${rows}
  `;
  totalEl.textContent = totalPrice.toFixed(2);
}

// Hide Cart Modal
continueShoppingBtn.addEventListener('click', () => {
  cartModal.classList.add('hidden');
});
