// Simple product database
const products = [
    { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
    { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
    { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' }
  ];

  // Get product using ID
  export function getProductById(id) {
    return products.find(p => p.id === id);
  }
  // Return all products
  export function getAllProducts() {
    return products;
  }
  // Filter products by category
  export function getProductsByCategory(category) {
    return products.filter(p => p.category === category);
  }
  // Search products by name
  export function searchProducts(query) {
    return products.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Check if stock is available
  export function checkStock(id, qty) {
    const product = getProductById(id);
    return product && product.stock >= qty;
  }
  // Reduce stock after purchase
  export function reduceStock(id, qty) {
    const product = getProductById(id);
    product.stock -= qty;
  }
  