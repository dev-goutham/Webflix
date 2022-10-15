import { useAuth } from '@/hooks/useAuth';
import React, { PropsWithChildren } from 'react';

const LoginButton: React.FC<PropsWithChildren> = () => {
  const { login } = useAuth();
  return (
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
  );
};

export default LoginButton;
