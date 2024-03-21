// import { NextRequest, NextResponse } from "next/server";
// import fetch from 'node-fetch'; // Import fetch for making HTTP requests

// interface SignInData {
//   name: string;
//   email: string;
//   userType: string;
// }

// export async function POST(req: NextRequest, res: NextResponse) {
//   try {
//     // Extract the body from the request
//     const { name, email, userType }: SignInData = await req.json();

//     // Make a POST request to the server endpoint
//     const serverResponse = await fetch('http://localhost:8080/api/signin', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ name, email, userType })
//     });

//     // Check if the response is successful
//     if (serverResponse.ok) {
//       // Forward the response from the server to the client
//       const responseData = await serverResponse.json();
//       return NextResponse.json(responseData, { status: serverResponse.status });
//     } else {
//       // If the server response is not successful, return an error
//       // return NextResponse.error(new Error('Server error'), { status: serverResponse.status });
//       return NextResponse.error();
//     }
//   } catch (error) {
//     // Handle any errors that occur during the process
//     console.error('Error making request:', error);
//     // return NextResponse.error(new Error('Internal server error'), { status: 500 });
//     return NextResponse.error();
//   }
// }


// import { NextRequest, NextResponse } from "next/server";
// import fetch from 'node-fetch';

// interface SignInData {
//   name: string;
//   email: string;
//   userType: string;
// }

// export function POST(req: NextRequest, res: NextResponse) {
//   req.json()
//     .then(({ name, email, userType }: SignInData) => {
//       return fetch('http://localhost:8080/api/signin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ name, email, userType })
//       });
//     })
//     .then(serverResponse => {
//       if (serverResponse.ok) {
//         return serverResponse.json();
//         // res.status(200).json();
//       } else {
//         if (serverResponse.status === 400) {
//           return { error: 'Bad request' };
//         } else if (serverResponse.status === 401) {
//           return { error: 'Unauthorized' };
//         } else {
//           throw new Error('Server error');
//         }
//       }
//     })
//     .then(responseData => {
//       // Return the response with appropriate data and status
//       return NextResponse.json(responseData);
//     })
//     .catch(error => {
//       console.error('Error making request:', error);
//       return NextResponse.error();
//     });
// }


import { NextRequest, NextResponse } from "next/server";
import fetch from 'node-fetch';

interface SignInData {
  name: string;
  email: string;
  userType: string;
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, email, userType }: SignInData = await req.json();

    const serverResponse = await fetch('http://localhost:8080/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, userType })
    });

    if (serverResponse.ok) {
      const responseData = await serverResponse.json();
      console.log('NextResponse: ', responseData);
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
