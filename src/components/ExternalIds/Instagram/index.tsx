import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  handle: string;
}

const Instagram: React.FC<Props> = ({ handle }) => {
  return (
    <div
      style={{
        display: handle.length > 0 ? 'block' : 'hidden',
      }}
    >
      <a
        target='blank'
        className='translate-y-1 block'
        href={`https://instagram.com/${handle}`}
      >
        {/* <InstaIcon /> */}
        <img
          className='h-[42px] w-[42px] mx-[3px]'
          src='https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg'
        />
      </a>
    </div>
  );
};

export default Instagram;
