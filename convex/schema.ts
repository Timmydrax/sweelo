
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Products table - matching your custom Product interface
  products: defineTable({
    slug: v.string(), // URL-friendly name (e.g., "xx99-mark-ii")
    name: v.string(), // Display name
    imageUrl: v.string(), // Main product image
    category: v.union(v.literal("headphones"), v.literal("speakers"), v.literal("earphones")),
    categoryImage: v.string(), // Image for category listing
    new: v.boolean(), // Is this a new product?
    price: v.number(),
    description: v.string(),
    features: v.string(), // Detailed features text
    includes: v.array(v.object({
      quantity: v.number(),
      item: v.string(),
    })),
    gallery: v.object({
      first: v.string(),
      second: v.string(),
      third: v.string(),
    }),
    others: v.array(v.object({
      slug: v.string(),
      name: v.string(),
      imageUrl: v.string(),
    })),
  })
    .index("by_slug", ["slug"])
    .index("by_category", ["category"])
    .index("by_new", ["new"]),

  // Orders table
  orders: defineTable({
    orderNumber: v.string(),
    customerEmail: v.string(),
    customerName: v.string(),
    customerPhone: v.optional(v.string()),
    
    shippingAddress: v.object({
      street: v.string(),
      city: v.string(),
      state: v.string(),
      zipCode: v.string(),
      country: v.string(),
    }),
    
    items: v.array(v.object({
      productId: v.id("products"),
      productName: v.string(),
      price: v.number(),
      quantity: v.number(),
      imageUrl: v.string(),
    })),
    
    subtotal: v.number(),
    tax: v.number(),
    shipping: v.number(),
    total: v.number(),
    
    status: v.string(),
    paymentStatus: v.string(),
    createdAt: v.number(),
  })
    .index("by_email", ["customerEmail"])
    .index("by_order_number", ["orderNumber"]),
});