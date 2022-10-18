import React, { PropsWithChildren } from 'react';
import { FaTwitter } from 'react-icons/fa';

interface Props extends PropsWithChildren {
  handle: string;
}

const Twitter: React.FC<Props> = ({ handle }) => {
  return (
    <div
      style={{
        display: handle.length > 0 ? 'block' : 'hidden',
      }}
    >
      <a target='blank' href={`https://twitter.com/${handle}`}>
        <FaTwitter className='text-[#1DA1F2]' size={48} />
      </a>
    </div>
  );
};

export default Twitter;
