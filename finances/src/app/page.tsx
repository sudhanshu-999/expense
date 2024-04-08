"use client"
import Image from "next/image";
import '@/app/main.css'
import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Navbar } from "./(protected)/_components/navbar";


export default function Home() {
  return (
    <>
      
        

     
              <SignInButton>
                <Button>
                  shittt
                </Button>
              </SignInButton>

            
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
