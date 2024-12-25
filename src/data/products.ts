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
  },
  {
    id: 5,
    name: "Smart Home Hub",
    price: 149.99,
    description: "Central control unit for your smart home devices with voice control and automation features.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&q=80"
  },
  {
    id: 6,
    name: "Gaming Console",
    price: 499.99,
    description: "Next-generation gaming console with 4K graphics and immersive gameplay experience.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&q=80"
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    price: 129.99,
    description: "Premium mechanical keyboard with RGB backlight and customizable switches.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80"
  },
  {
    id: 8,
    name: "Developer Toolkit",
    price: 299.99,
    description: "Complete software development toolkit with premium IDE licenses and cloud credits.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&q=80"
  },
  {
    id: 9,
    name: "Coding Laptop",
    price: 1299.99,
    description: "High-performance laptop optimized for software development and multitasking.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&q=80"
  },
  {
    id: 10,
    name: "Smart Glasses",
    price: 399.99,
    description: "AR-enabled smart glasses with heads-up display and voice commands.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80"
  },
  {
    id: 11,
    name: "AI Development Kit",
    price: 799.99,
    description: "Complete AI/ML development kit with specialized hardware and software tools.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&q=80"
  },
  {
    id: 12,
    name: "Cybersecurity Suite",
    price: 449.99,
    description: "Professional-grade cybersecurity tools and monitoring software.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&q=80"
  },
  {
    id: 13,
    name: "Network Analyzer",
    price: 299.99,
    description: "Advanced network analysis and optimization toolkit for IT professionals.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&q=80"
  },
  {
    id: 14,
    name: "Tech Backpack",
    price: 89.99,
    description: "Water-resistant backpack with dedicated compartments for all your tech gear.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&q=80"
  }
];