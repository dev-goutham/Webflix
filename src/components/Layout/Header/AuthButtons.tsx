import React, { useState } from 'react';
import { User } from '@auth0/auth0-react';
import { useAuth } from '@/hooks/useAuth';

const AuthButtons: React.FC = () => {
  const { isAuthenticated, login, user, logout } = useAuth();
  return (
    <div className='mr-6'>
      {!isAuthenticated ? (
        <button
          onClick={() => login()}
          className='flex items-center h-[48px] rounded-md bg-blue-500'
        >
          <div className='bg-white h-[48px] w-[48px] rounded-l-md p-2'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
              alt='google login'
              className='h-full w-full inline-block'
            />
          </div>
          <span className='bg-blue-500 px-4 font-bold rounded-r-sm inline-block'>
            Login With Google
          </span>
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
        <img
          referrerPolicy='no-referrer'
          className='w-8 h-8 rounded-full'
          src={user.picture}
        />
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
