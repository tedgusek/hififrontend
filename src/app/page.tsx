'use client'
import Image from "next/image";
import Link from "next/link";
import SignIn from "@/components/SignInForm";
import AdminDashboard from "@/components/AdminDashboard";
// import UserDashboard from "@/components/UserDashboard";
import UserDashboard from "@/components/UserDashboard";
import { SetStateAction, useState } from "react";

export default function Home() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isUserType, setUserType] = useState(null);
  
  const handleSignInSuccess = () => {
    setIsSignedIn(true);
  }

  const handleUserType = (type: SetStateAction<null>) => {
    setUserType(type);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex">
        <p className="left-auto top-10 flex flex-col items-center mb-4">
          Help Desk Tickets 
          <Image
            src="/hifibridge_logo.jpeg"
            alt="HiFi Logo Purple arrow starting in bottom left corner of white square box pointing up to the right"
            width={50}
            height={50}
            className="mt-4"    
          />  
        </p>
      </div> */}
      

      {!isSignedIn ? (
        < SignIn onSignInSuccess={handleSignInSuccess} onHandleUserType={handleUserType} />
      ) : (
          (isUserType === '/userDashboard') ? (
            <UserDashboard />
          ) : (
              <AdminDashboard />
          )
        
      )}

      {/* Will need to adjust these links if user auth is required */}
      {/* <Link href="/adminDashboard">Admin Dashboard</Link>  */}
      {/* <Link href="/userDashboard">User Dashboard</Link> */}
    </main>
  );
}
