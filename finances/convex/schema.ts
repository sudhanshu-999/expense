import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    expenses: defineTable({
      title: v.string(),
      userId: v.string(),
      amount: v.number(),
      type: v.string(),

      description: v.optional(v.string())
      
    })
    .index("by_user", ["userId"])

  });
  