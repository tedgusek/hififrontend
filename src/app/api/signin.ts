import { NextApiRequest, NextApiResponse } from 'next';

interface SignInData {
  name: string;
  email: string;
  userType: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, userType }: SignInData = req.body;

    // Here you would typically perform validation and authentication logic
    // For demonstration purposes, let's just check if the user type is "User"
    if (userType === 'User') {
      // User is valid, perform sign-in action
      res.status(200).json('success');
    } else {
      // User is invalid, send error message
      res.status(400).json('Invalid user type');
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
