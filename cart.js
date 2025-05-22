let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  saveCart();
  updateCart();
}

function addToCartFromCard(button) {
  const card = button.closest('.product-card');
  const name = card.querySelector('h3').textContent.trim();
  const priceText = card.querySelector('.price').textContent.trim();
  const price = parseInt(priceText.replace(/\s|₸/g, ''), 10); // убираем пробелы и ₸

  addToCart(name, price);
}

function updateCart() {
  const cartCount = document.getElementById('cart-count');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  cartCount.textContent = cart.length;
  cartItems.innerHTML = '';

  let total = 0;

  cart.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} — ${item.price.toLocaleString()} ₸`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = `Итого: ${total.toLocaleString()} ₸`;
}

function toggleCart() {
  const cartElement = document.getElementById('cart');
  cartElement.style.display = cartElement.style.display === 'none' ? 'block' : 'none';
}

function clearCart() {
  cart = [];
  saveCart();
  updateCart();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

document.addEventListener('DOMContentLoaded', updateCart);
