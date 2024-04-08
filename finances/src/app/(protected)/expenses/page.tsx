"use client"
import { Button } from "@/components/ui/button";
import { TableLayout } from "../_components/table";
import { Plus } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { title } from "process";
import { toast } from "sonner";
import { ExpenseModal } from "@/components/modals/expense-modal";











const ExpensesPage = () => {

    const create = useMutation(api.expenses.create)

    const handleCreate = () => {
        const promise = create({ title: "Untitled" , amount : 124 , type: "sjit"})

    
        toast.promise(promise, {
          loading: "Creating a new record",
          success: "New record created!",
          error: "Failed to create a record"
        });
      };





    return ( 
    <div className="flex h-[100vh] w-[100vw] justify-center items-center p-20 text-white">
        <div className="relative w-full h-full bg-black rounded-xl">
            <TableLayout />
            <ExpenseModal>
        <div className="absolute bottom-10 right-10">
            <Button  variant="outline" className="text-black">
                <Plus />
            </Button>
        </div>
            </ExpenseModal>
        </div>

        
        
    </div> );
}
 
export default ExpensesPage;