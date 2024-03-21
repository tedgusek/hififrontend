// Will set up the path to go to connect to the backend where the middleware can handle the CRUD operations to interact with the database
import { NextRequest, NextResponse } from 'next/server';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const URL: string = process.env.URL ?? 'http://localhost:8080';

interface SignInData {
  name: string;
  email: string;
  description: string;
}

// Post the Ticket to the DB
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, email, description }: SignInData = await req.json();

    const serverResponse = await fetch(`${URL}/ticket`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ name, email, description }),
    });

    if (serverResponse.ok) {
      const responseData = await serverResponse.json();
      return NextResponse.json(responseData);
    } else {
      if (serverResponse.status === 400) {
        return NextResponse.json({ error: 'Bad request' }, { status: 400 });
      } else if (serverResponse.status === 401) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      } else {
        throw new Error('Server Error from ticket POST');
      }
    }
  } catch (error) {
    console.error(`Error making request: ${error}`);
    return NextResponse.error();
  }
}
