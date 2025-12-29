import { query } from "./_generated/server";

export const getAllProducts = query({
  handler: async (ctx) => {
    return await ctx.db.query("products").collect();
  },
});
