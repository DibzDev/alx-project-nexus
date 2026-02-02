export function getCart() {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("kheir-cart") || "[]");
}

export function saveCart(cart: any[]) {
  localStorage.setItem("kheir-cart", JSON.stringify(cart));
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

export function increaseQty(id: number) {
  const cart = getCart().map((item: any) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );
  saveCart(cart);
}

export function decreaseQty(id: number) {
  const cart = getCart()
    .map((item: any) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    )
    .filter((item: any) => item.quantity > 0);

  saveCart(cart);
}

export function removeFromCart(id: number) {
  const cart = getCart().filter((item: any) => item.id !== id);
  saveCart(cart);
}

export function clearCart() {
  localStorage.removeItem("kheir-cart");
}
