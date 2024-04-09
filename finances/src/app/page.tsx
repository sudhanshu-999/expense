"use client"
import Image from "next/image";
import '@/app/main.css'
import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

import { useConvexAuth } from "convex/react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
    const router = useRouter();
    const {isAuthenticated} = useConvexAuth();
  




  return (
    <>
    {!isAuthenticated ? (<>
        <SignInButton>
                <Button className="absolute right-6 top-4 ">
                  Login
                </Button>
              </SignInButton>
    </>):(
        <>
            
                <div className="flex justify-end gap-8 px-8 py-4">
                <Link href={"/dashboard"} >
                        <Button className=" px-6 py-3  text-lg" >
                        Explore
                        </Button>
                </Link>
              
                </div>
            
        </>
    )
    }


      
        

     
              {/* <SignInButton>
                <Button className="abso">
                  Login
                </Button>
              </SignInButton>

               */}
    <div className="main">

        <div id="page1">
           <div id="text">
            <h1>Take control</h1>
            <div id="inov">
                <div id="intro">
                    <video autoPlay muted loop  src="/assets/video1.mp4" ></video>
                </div>
                <h2> of Your <span>Finances</span></h2>
            </div>
            <h1>Today!  </h1>
           </div>


        </div>
        <div id="page2">
            <video autoPlay muted loop src="/assets/video2.mp4"></video>
            
        </div>
        <div id="page3">
            <h1><i>Features</i></h1>
            <div className="events">
                <div className="events1">
                    <div className="track1">
                        <img src="/assets/Design.png" alt=""/>
                    </div>
                    <h2><i>Budget Tracker</i></h2>
                    <div className="track2">
                        <img src="/assets/Kand.png" alt=""/>
                    </div>
                    <h2><i>Income Tracker</i></h2>
                    
                </div>
                <div className="events2">
                    <div className="track3">
                        <img src="/assets/Kand.png" alt=""/>
                    </div>
                    <h2><i>Goal Setting</i></h2>

                    <div className="track4">
                        <img src="/assets/Kand.png" alt=""/>
                    </div>
                    <h2><i>Expense Analysis</i></h2>

                </div>
            </div>
        </div>
    </div>
    
    </>
  );
}
