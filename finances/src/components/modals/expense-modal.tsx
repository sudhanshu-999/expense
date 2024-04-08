"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger
  } from "@/components/ui/dialog";
import { ReactNode } from "react";

  interface ExpenseModalProps {
    children: React.ReactNode;
}





  export const ExpenseModal = ({children}: ExpenseModalProps) =>{
    return(
        <Dialog>
            <DialogTrigger>
                {children}
            </DialogTrigger>
            <DialogContent>
                Yeagggggg
            </DialogContent>
        </Dialog>
    )
  }