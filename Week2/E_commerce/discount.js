// Available coupons
const coupons = {
    'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
    'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
    'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
  };
  
  // Check whether coupon is valid or not
  export function validateCoupon(couponCode, cartTotal, cartItems) {
    const coupon = coupons[couponCode];
  
    // 1. Check if coupon exists
    if (!coupon) {
      return { valid: false, message: 'Invalid coupon code' };
    }
  
    // 2. Check minimum amount
    if (cartTotal < coupon.minAmount) {
      return { valid: false, message: 'Minimum amount not satisfied' };
    }
  
    // 3. Check category condition (if any)
    if (coupon.category) {
      const categoryFound = cartItems.some(
        item => item.category === coupon.category
      );
  
      if (!categoryFound) {
        return { valid: false, message: 'Coupon not applicable for this category' };
      }
    }
  
    return { valid: true, message: 'Coupon applied successfully' };
  }
  // Calculate discount amount
  export function calculateDiscount(couponCode, cartTotal) {
    const coupon = coupons[couponCode];
    // Percentage discount
    if (coupon.type === 'percentage') {
      return (cartTotal * coupon.value) / 100;
    }
  
    // Flat discount
    if (coupon.type === 'flat') {
      return coupon.value;
    }
  
    return 0;
  }
  // Apply discount and return final bill
  export function applyDiscount(cartTotal, couponCode, cartItems) {
    const check = validateCoupon(couponCode, cartTotal, cartItems);
    // If coupon is invalid
    if (!check.valid) {
      return {
        originalTotal: cartTotal,
        discount: 0,
        finalTotal: cartTotal,
        message: check.message
      };
    }
    // Calculate discount
    const discount = calculateDiscount(couponCode, cartTotal);
  
    return {
      originalTotal: cartTotal,
      discount: discount,
      finalTotal: cartTotal - discount,
      message: 'Discount applied'
    };
  }
  