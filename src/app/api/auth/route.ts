import { NextRequest, NextResponse } from 'next/server';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const URL: string = process.env.URL ?? 'http://localhost:8080';

interface SignInData {
  name: string;
  email: string;
  userType: string;
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, email, userType }: SignInData = await req.json();

    const serverResponse = await fetch(`${URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, userType }),
    });

    if (serverResponse.ok) {
      const responseData = await serverResponse.json();
      // console.log('NextResponse: ', responseData);
      return NextResponse.json(responseData);
    } else {
      if (serverResponse.status === 400) {
        return NextResponse.json({ error: 'Bad request' }, { status: 400 });
      } else if (serverResponse.status === 401) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      } else {
        throw new Error('Server error');
      }
    }
  } catch (error) {
    console.error('Error making request:', error);
    return NextResponse.error();
  }
}
