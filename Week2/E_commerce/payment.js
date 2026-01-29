import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';
// Validate payment method
export function validatePaymentMethod(method) {
  return method === 'card' || method === 'upi' || method === 'cod';
}
// Process payment
export function processPayment(paymentMethod, couponCode = null) {
  // 1. Get cart items and total
  const items = getCartItems();
  const subtotal = getCartTotal();

  // Cart empty check
  if (items.length === 0) {
    return {
      status: 'failed',
      message: 'Cart is empty'
    };
  }

  // 2. Apply discount
  let discount = 0;
  let total = subtotal;

  if (couponCode) {
    const discountResult = applyDiscount(subtotal, couponCode, items);
    discount = discountResult.discount;
    total = discountResult.finalTotal;
  }

  // 3. Validate payment method
  if (!validatePaymentMethod(paymentMethod)) {
    return {
      status: 'failed',
      message: 'Invalid payment method'
    };
  }
  // 4. Simulate payment (always success)
  // 5. Reduce stock
  items.forEach(item => {
    reduceStock(item.id, item.quantity);
  });
  // 6. Clear cart
  clearCart();
  // 7. Order summary
  return {
    orderId: generateOrderId(),
    items: items,
    subtotal: subtotal,
    discount: discount,
    total: total,
    paymentMethod: paymentMethod,
    status: 'success',
    message: 'Payment successful'
  };
}
// Generate order ID
function generateOrderId() {
  return 'ORD'
}
