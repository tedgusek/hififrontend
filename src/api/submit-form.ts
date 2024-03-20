import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Handle POST request (form submission)
    console.log('Form data:', req.body);
    // Example: Send a response
    res.status(200).json({ message: 'Form submitted successfully!' });
  } else {
    // Handle other HTTP methods
    res.status(405).end(); // Method Not Allowed
  }
}
