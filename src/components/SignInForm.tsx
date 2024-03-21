import { useState, ChangeEvent, FormEvent, SetStateAction } from 'react';
import Image from 'next/image';

interface FormData {
  name: string;
  email: string;
  userType: string;
}
interface SignInProps {
    onSignInSuccess: () => void;
    onSignOut: () => void;
    onHandleUserType: (type: SetStateAction<null>) => void;
}

export default function SignIn({onSignInSuccess , onHandleUserType, onSignOut}:SignInProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    userType: 'User'
  });
    const [errorMessage, setErrorMessage] = useState<string>(''); // State to store error message

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Send form data to backend for validation
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Parse response JSON
      const data = await response.json();
        console.log('data ', data);
        // Check if response is successful and user is valid
        // router.push(data[0]);
      if (data.length === 3) {
        // Sign in successful
        //   router.push(data[0]);
          onSignInSuccess();
          onHandleUserType(data[0]);
        console.log('Sign in successful!');
        setErrorMessage('');
      } else {
        // Sign in failed, display error message
        setErrorMessage(data);
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setErrorMessage('An error occurred');
    }
  };

  return (
    <div className='bg-slate-600 border-4 border-white rounded-xl p-4'>
       <div className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex">
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
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input 
            className='text-black rounded-xl'
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className='p-4'>
          <label htmlFor="email">Email: </label>
          <input
            className='text-black rounded-xl' 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className='p-4'>
          <label htmlFor="userType">User Type: </label>
          <select 
            className='text-black rounded-xl'
            id="userType" 
            name="userType" 
            value={formData.userType} 
            onChange={handleChange} 
            required 
          >
            <option value="User" className='text-black rounded-xl'>User</option>
            <option value="Staff" className='text-black rounded-xl'>Staff</option>
          </select>
        </div>
        <button type="submit" className='bg-purple-600 hover:bg-purple-300 rounded-xl py-4 px-6 border-4 border-white'>Sign In</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
