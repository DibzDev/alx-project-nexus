export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Smart LED TV 43\"",
    price: 38999,
    image: "/products/tv.jpg",
    category: "TVs",
    description: "43-inch Full HD Smart LED TV with vibrant colors."
  },
  {
    id: 2,
    name: "Samsung Galaxy A15",
    price: 21999,
    image: "/products/phone.jpg",
    category: "Phones",
    description: "Affordable smartphone with long battery life."
  },
  {
    id: 3,
    name: "Blender Pro 600W",
    price: 7499,
    image: "/products/blender.jpg",
    category: "Kitchen",
    description: "Powerful blender for smoothies and food prep."
  }
];
