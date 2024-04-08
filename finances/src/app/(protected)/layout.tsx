"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";


import { Spinner } from "@/components/spinner";
import { Navigation } from "./_components/Navigation";


const MainLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  
  if (!isAuthenticated) {
    return redirect("/");
  }

  return ( 
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <main className="flex h-[100vh] overflow-y-auto">
        <Navigation />
      
        {children}
      </main>
    </div>
   );
}
 
export default MainLayout;