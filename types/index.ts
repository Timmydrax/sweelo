import { Id } from "@/convex/_generated/dataModel";

// src/lib/types.ts
export interface Product {
  _id: Id<"products">;
  _creationTime: number;
  slug: string; // URL-friendly name (e.g., "xx99-mark-ii")
  name: string; // Display name
  imageUrl: string;
  category: "headphones" | "speakers" | "earphones";
  categoryImage: string; // Image for category listing
  new: boolean; // Is this a new product?
  price: number;
  description: string;
  features: string;
  includes: Array<{
    quantity: number;
    item: string;
  }>;
  gallery: {
    first: string;
    second: string;
    third: string;
  };
  others: Array<{
    slug: string;
    name: string;
    imageUrl: string;
  }>;
}

// Order/Cart Item interface
export interface OrderItem {
  productId: Id<"products">;
  productName: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface Order {
  _id: Id<"orders">;
  _creationTime: number;
  orderNumber: string;
  customerEmail: string;
  customerName: string;
  customerPhone?: string;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  status: string;
  paymentStatus: string;
  createdAt: number;
}
