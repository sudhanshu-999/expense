"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
    DialogClose
  } from "@/components/ui/dialog";
import { ReactNode, useRef } from "react";
import { Input } from "../ui/input";
import { ExpenseForm } from "../expense-form";
import { Button } from "../ui/button";





  interface ExpenseModalProps {
    children: React.ReactNode;
}





  export const ExpenseModal = ({children}: ExpenseModalProps) =>{
    const inputRef = useRef<HTMLInputElement>(null);

    return(
        <Dialog>
            <DialogTrigger>
                {children}
            </DialogTrigger>
            <DialogContent>
            <DialogHeader className="flex items-center justify-center">
                Enter your expense
            </DialogHeader>
            <ExpenseForm />
   
            
            
            
            </DialogContent>
        </Dialog> 
    )
  }