import React, { useState } from 'react';
import { useAuth0, User } from '@auth0/auth0-react';

const AuthButtons: React.FC = () => {
  const { isAuthenticated, loginWithPopup, user, logout } = useAuth0();
  return (
    <div className='mr-6'>
      {!isAuthenticated ? (
        <button
          onClick={() => loginWithPopup()}
          className='dark:bg-teal-800  px-4 py-1  text-white rounded-md'
        >
          Log In With Google
        </button>
      ) : user ? (
        <Avatar user={user} logout={logout} />
      ) : (
        <button>Log out</button>
      )}
    </div>
  );
};

const Avatar: React.FC<{ user: User; logout: () => void }> = ({
  user,
  logout,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative '>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <img className='w-8 h-8 rounded-full' src={user.picture} />
      </button>
      <button
        className={`absolute  ${
          isOpen ? 'block' : 'hidden'
        } -bottom-12 -left-6 px-4 py-2 bg-red-500 shadow-lg rounded-lg`}
        onClick={() => {
          logout();
          setIsOpen(false);
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default AuthButtons;
