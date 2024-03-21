import Image from "next/image";
import SignOutButton from "./SignOutButton";

interface AdminDashboardProps {
    onSignOut: () => void;
  }

// export default function AdminDashboard() {
    const AdminDashboard: React.FC<AdminDashboardProps> = ({ onSignOut }) => {
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex">
          <p className="left-auto top-10 flex flex-col items-center mb-4">
            Admin Dashboard
            <Image
              src="/hifibridge_logo.jpeg"
              alt="HiFi Logo Purple arrow starting in bottom left corner of white square box pointing up to the right"
              width={50}
              height={50}
              className="mt-4"    
            />  
          </p> 
            </div>
            <SignOutButton onClick={onSignOut} />
    </main>
    );
    }

export default AdminDashboard;