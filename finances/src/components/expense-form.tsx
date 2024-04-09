"use client"
 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useMutation } from "convex/react"
import { api } from "../../convex/_generated/api"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { DialogClose } from "./ui/dialog"
 
const formSchema = z.object({
  title: z.string().min(2).max(50),
  amount: z.coerce.number(),
  category: z.string(),
  description: z.string(),
})


export const ExpenseForm = () =>{
    const create = useMutation(api.expenses.create)

  






    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title: "Untitled",
          amount: 0,
          category: "",
          description: ""
        },
      })


      function onSubmit(values: z.infer<typeof formSchema>) {
       create({
        title: values.title,
        amount: values.amount,
        type: values.category,
        description: values.description

       })
      }



      return(
        <div>
             <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6"
      >
        <div className="space-y-4 w-[20vw]" >
          <FormField control={form.control}   name="title" render={({field})=>(
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input className="text-black"  {...field} placeholder="Enter title for the expense"  />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}/>

<FormField control={form.control}  name="category" render={({field})=>(
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input className="text-black" {...field} placeholder="category" />
              </FormControl>
              <FormMessage  />
            </FormItem>
          )}/>

          <FormField control={form.control}  name="amount" render={({field})=>(
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input className="text-black" {...field} placeholder="Enter the amount" type="number" />
              </FormControl>
              <FormMessage  />
            </FormItem>
            
            
          )}/>
<FormField control={form.control}  name="description" render={({field})=>(
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
              <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />

              </FormControl>
              <FormMessage  />
            </FormItem>
            
            
          )}/>




           
        </div>



<DialogClose>

          <Button type="submit" className="w-full">Add expense</Button>
</DialogClose>




      </form>
    </Form>
        </div>
      )





}