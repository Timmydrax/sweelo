import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Products table
  products: defineTable({
    name: v.string(),
    description: v.string(),
    price: v.number(),
    category: v.string(), // "headphones", "speakers", "amplifiers", etc.
    brand: v.string(),
    imageUrl: v.string(),
    imageUrls: v.optional(v.array(v.string())), // Multiple images
    stock: v.number(),
    featured: v.boolean(), // For homepage featured products
    specifications: v.optional(
      v.object({
        impedance: v.optional(v.string()),
        frequency: v.optional(v.string()),
        power: v.optional(v.string()),
        // Add more as needed
      })
    ),
  })
    .index("by_category", ["category"])
    .index("by_featured", ["featured"]),

  // Orders table
  orders: defineTable({
    orderNumber: v.string(), // e.g., "ORD-20240101-1234"
    customerEmail: v.string(),
    customerName: v.string(),
    customerPhone: v.optional(v.string()),

    // Shipping address
    shippingAddress: v.object({
      street: v.string(),
      city: v.string(),
      state: v.string(),
      zipCode: v.string(),
      country: v.string(),
    }),

    // Order items (snapshot of products at purchase time)
    items: v.array(
      v.object({
        productId: v.id("products"),
        productName: v.string(),
        price: v.number(),
        quantity: v.number(),
        imageUrl: v.string(),
      })
    ),

    subtotal: v.number(),
    tax: v.number(),
    shipping: v.number(),
    total: v.number(),

    status: v.string(), // "pending", "confirmed", "shipped", "delivered"
    paymentStatus: v.string(), // "pending", "paid", "failed"

    createdAt: v.number(), // timestamp
  })
    .index("by_email", ["customerEmail"])
    .index("by_order_number", ["orderNumber"])
    .index("by_created_at", ["createdAt"]),

  // Optional: Cart table (for logged-in users or persistent carts)
  carts: defineTable({
    userId: v.optional(v.string()), // If you add auth later
    sessionId: v.string(), // For guest users
    items: v.array(
      v.object({
        productId: v.id("products"),
        quantity: v.number(),
      })
    ),
    updatedAt: v.number(),
  }).index("by_session", ["sessionId"]),
});
