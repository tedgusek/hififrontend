import React from 'react';

interface SignOutButtonProps {
  onClick: () => void;
}

const SignOutButton: React.FC<SignOutButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='border-white rounded-xl border-4 bg-purple-600 hover:bg-purple-300 py-2 px-6'
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
