"use client"



import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useQuery } from "convex/react"
import { api } from "../../../../convex/_generated/api"



  export const TableLayout = () =>{

    const expenses = useQuery(api.expenses.getExpense)

    if (!expenses) return null



    






    return(
        <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Title</TableHead>
      <TableHead>Category</TableHead>
      <TableHead>Description</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {expenses.map((expense)=>(
      <TableRow>
      <TableCell className="font-medium">{expense.title}</TableCell>
      <TableCell>{expense.type}</TableCell>
      <TableCell>{expense.description}</TableCell>
      <TableCell className="text-right">{expense.amount}</TableCell>
    </TableRow>

    ))}
  </TableBody>
</Table>


    )
  }