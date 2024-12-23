export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199.99,
    description: "Premium wireless headphones with noise cancellation and crystal clear sound quality. Perfect for music lovers and professionals alike.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    description: "Feature-rich smartwatch with health tracking, notifications, and a beautiful OLED display. Stay connected and healthy.",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80"
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 49.99,
    description: "Ergonomic aluminum laptop stand. Improves posture and keeps your device cool during intensive tasks.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80"
  },
  {
    id: 4,
    name: "Wireless Mouse",
    price: 79.99,
    description: "Precision wireless mouse with ergonomic design and long battery life. Perfect for productivity and gaming.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80"
  }
];