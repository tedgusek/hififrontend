'use client'
import Image from "next/image";
import SupportForm from "@/components/HelpTicketSubmissionForm";

export default function Page() {
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex">
      {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"> */}
      <p className="left-auto top-10 flex flex-col items-center mb-4">
      User Dashboard
        <Image
          src="/hifibridge_logo.jpeg"
          alt="HiFi Logo Purple arrow starting in bottom left corner of white square box pointing up to the right"
          width={50}
          height={50}
          className="mt-4"    
    />  
      </p>
      
            </div>
            <SupportForm />
        </main>
    );
}