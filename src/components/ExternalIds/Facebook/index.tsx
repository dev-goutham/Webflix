import React, { PropsWithChildren } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';

interface Props extends PropsWithChildren {
  handle: string;
}

const Facebook: React.FC<Props> = ({ handle }) => {
  return (
    <div
      style={{
        display: handle.length > 0 ? 'block' : 'hidden',
      }}
    >
      <a target='blank' href={`https://facebook.com/${handle}`}>
        <FaFacebookSquare className='text-[#1877f2]' size={48} />
      </a>
    </div>
  );
};

export default Facebook;
