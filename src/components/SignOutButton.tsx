// import { useState } from 'react';

// interface SignOutProps {
//   onSignOut: () => void;
// }

// const SignOutButton: React.FC<SignOutProps> = ({ onSignOut }) => {
//   const handleSignOut = () => {
//     // Perform any necessary sign-out logic
//     // For example, clearing authentication tokens, resetting state, etc.
//     // Then call the onSignOut callback provided by the parent component
//     onSignOut();
//   };

//   return (
//     <button onClick={handleSignOut} className="sign-out-button">
//       Sign Out
//     </button>
//   );
// };

// export default SignOutButton;
import React from 'react';

interface SignOutButtonProps {
  onClick: () => void;
}

const SignOutButton: React.FC<SignOutButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className='border-white rounded-xl border-4 bg-purple-600 hover:bg-purple-300 py-2 px-6'>
      Sign Out
    </button>
  );
}

export default SignOutButton;
