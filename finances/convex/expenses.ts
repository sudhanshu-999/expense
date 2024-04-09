import { v } from "convex/values";

import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";



export const create = mutation({
    args: {
      title: v.string(),
      type: v.string(),
      amount: v.number(),
      description: v.string()


    },
    handler: async (ctx, args) => {
      const identity = await ctx.auth.getUserIdentity();
  
      if (!identity) {
        throw new Error("Not authenticated");
      }
  
      const userId = identity.subject;
  
      const expense = await ctx.db.insert("expenses", {
        title: args.title,

        type : args.type,
        amount : args.amount,
        description: args.description,
        userId,


      });
  
      return expense;
    }
  });



export const getExpense = query({
  args: {

  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;

    const expense = await ctx.db
      .query("expenses")
      .withIndex("by_user", (q) =>
        q
          .eq("userId", userId)

      )
     
      .order("desc")
      .collect();

    return expense;
  },
});
