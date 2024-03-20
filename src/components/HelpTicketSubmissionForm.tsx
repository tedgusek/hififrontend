// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import axios from 'axios';

// interface FormData {
//   email: string;
//   name: string;
//   description: string;
// }

// function SupportForm() {
//   const [formData, setFormData] = useState<FormData>({
//     email: '',
//     name: '',
//     description: ''
//   });

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
      
//       if (response.status === 200) {
//         // Form submitted successfully
//         console.log('Form submitted successfully');
//         // Reset form fields after successful submission
//         setFormData({
//           email: '',
//           name: '',
//           description: ''
//         });
//       } else {
//         console.error('Error submitting form:', response.statusText);
//       }
//     } catch (error) {
//     //   console.error('Error submitting form:', error.message);
//     }
//   };
import axios from 'axios';
import React, { useState, ChangeEvent, FormEvent } from 'react';

function SupportForm() {
  const [formData, setFormData] = useState({
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
    <form onSubmit={handleSubmit}>
      <div  className='flex flex-col items-center'>
        <div className='py-2'>
        <label htmlFor="email">Email:</label>
        <input 
          className='text-black'
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className='py-2'>
        <label htmlFor="name">Name:</label>
        <input 
          className='text-black'
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className='py-2'>
        <label htmlFor="description">Description:</label>
        <textarea 
          className='text-black'
          id="description" 
          name="description" 
          value={formData.description} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default SupportForm;
