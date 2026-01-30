export function getCart() {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("kheir-cart") || "[]");
}

export function saveCart(cart: any[]) {
  localStorage.setItem("kheir-cart", JSON.stringify(cart));
  window.dispatchEvent(new Event("cart-updated"));
}


export function addToCart(product: any) {
  const cart = getCart();
  const existing = cart.find((item: any) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
}

export function updateQuantity(id: number, quantity: number) {
  const cart = getCart()
    .map((item: any) =>
      item.id === id ? { ...item, quantity } : item
    )
    .filter((item: any) => item.quantity > 0); // auto-remove if 0

  saveCart(cart);
}


export function removeFromCart(id: number) {
  const cart = getCart().filter((item: any) => item.id !== id);
  saveCart(cart);
}
