// import axios from 'axios';
// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import Image from 'next/image';
// import SignOutButton from './SignOutButton';

// interface FormData {
//   email: string;
//   name: string;
//   description: string;
// }

// interface UserDashboardProps {
//   onSignOut: () => void;
// }

// // function UserDashboard(onClick: () => void) {
// function UserDashboard: React.FC<{ onClick: () => void }> ({ onClick }) => {
//   const [formData, setFormData] = useState<FormData>({
//     email: '',
//     name: '',
//     description: ''
//   });

//   const handleOnSignOut = () => {
//     onSignOut();
//   }

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('/api/submit-form', formData);
//       console.log(response.data); // Log the response from the API
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };


//   return (
//     <form onSubmit={handleSubmit} className='w-80 h-auto p-4 bg-slate-500 border-white border-4 rounded-xl'>
//        <div className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex">
//           <p className="left-auto top-10 flex flex-col items-center mb-4">
//             User Dashboard
//             <Image
//               src="/hifibridge_logo.jpeg"
//               alt="HiFi Logo Purple arrow starting in bottom left corner of white square box pointing up to the right"
//               width={50}
//               height={50}
//               className="mt-4"    
//             />  
//           </p>
        
//         </div>
//       <div  className='flex flex-col items-center'>
//         <div className='py-2'>
//         <label htmlFor="email">Email: </label>
//         <input 
//           className='text-black rounded-xl'
//           type="email" 
//           id="email" 
//           name="email" 
//           value={formData.email} 
//           onChange={handleChange} 
//           required 
//         />
//       </div>
//       <div className='py-2'>
//         <label htmlFor="name">Name: </label>
//         <input 
//           className='text-black rounded-xl'
//           type="text" 
//           id="name" 
//           name="name" 
//           value={formData.name} 
//           onChange={handleChange} 
//           required 
//         />
//       </div>
//       <div className='py-2'>
//         <label htmlFor="description">Description: </label>
//         <textarea 
//           className='text-black rounded-xl h-40'
//           id="description" 
//           name="description" 
//           value={formData.description} 
//           onChange={handleChange} 
//           required 
//         />
//       </div>
//         <button type="submit" className='border-white rounded-xl border-4 bg-purple-600 hover:bg-purple-300 py-2 px-6'>Submit</button>
//         <SignOutButton onClick={onClick}/>
//       </div>
//     </form>
//   );
// }

// export default UserDashboard;
import axios from 'axios';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import SignOutButton from './SignOutButton';

interface FormData {
  email: string;
  name: string;
  description: string;
}

interface UserDashboardProps {
  onSignOut: () => void;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ onSignOut }) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    description: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/submit-form', formData);
      console.log(response.data); // Log the response from the API
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-80 h-auto p-4 bg-slate-500 border-white border-4 rounded-xl'>
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex">
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
      <div className='flex flex-col items-center'>
        <div className='py-2'>
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
        <div className='py-2'>
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
        <div className='py-2'>
          <label htmlFor="description">Description: </label>
          <textarea
            className='text-black rounded-xl h-40'
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='border-white rounded-xl border-4 bg-purple-600 hover:bg-purple-300 py-2 px-6'>Submit</button>
        <SignOutButton onClick={onSignOut} />
      </div>
    </form>
  );
}

export default UserDashboard;
