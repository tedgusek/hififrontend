'use client'

import SignIn from "@/components/SignInForm";
import AdminDashboard from "@/components/AdminDashboard";
import UserDashboard from "@/components/UserDashboard";
import { SetStateAction, useState } from "react";

export default function Home() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isUserType, setUserType] = useState(null);
  // const [isSignedOut, setIsSignedOut] = useState(true);
  
  const handleSignInSuccess = () => {
    setIsSignedIn(true);
  }
  const handleSignOut = () => {
    setIsSignedIn(false);
  }

  const handleUserType = (type: SetStateAction<null>) => {
    setUserType(type);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {!isSignedIn ? (
        < SignIn onSignInSuccess={handleSignInSuccess} onSignOut={handleSignOut} onHandleUserType={handleUserType} />
      ) : (
          (isUserType === '/userDashboard') ? (
            <UserDashboard onSignOut={handleSignOut}/>
          ) : (
              <AdminDashboard onSignOut={handleSignOut} />
          )
        
      )}
    </main>
  );
}
