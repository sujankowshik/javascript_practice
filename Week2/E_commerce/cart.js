import { getProductById, checkStock } from './product.js';
// Store cart items
let cart = [];
// Add product to cart
export function addToCart(id, qty) {
  // Check stock
  if (!checkStock(id, qty)) return 'Stock not available';

  // Check if item already exists
  const item = cart.find(i => i.id === id);

  if (item) {
    item.qty += qty; // Update quantity
  } else {
    cart.push({ id, qty }); // Add new item
  }

  return 'Added to cart';
}
// Remove product from cart
export function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  return 'Item removed';
}
// Update quantity in cart
export function updateQuantity(id, qty) {
  if (!checkStock(id, qty)) return 'Stock not available';

  const item = cart.find(i => i.id === id);
  item.qty = qty;
  return 'Quantity updated';
}
// Get cart items with product details
export function getCartItems() {
  return cart.map(i => {
    const p = getProductById(i.id);
    return {
      id: i.id,
      name: p.name,
      price: p.price,
      qty: i.qty
    };
  });
}
// Calculate total price
export function getCartTotal() {
  return cart.reduce((sum, i) => {
    const p = getProductById(i.id);
    return sum + p.price * i.qty;
  }, 0);
}

// Clear cart after checkout
export function clearCart() {
  cart = [];
}
