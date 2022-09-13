import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = Math.floor(5 - rating);
  return (
    <div className='flex items-center gap-4'>
      <span className='text-3xl font-semibold'>{rating}</span>
      <span className='flex text-xl gap-[2px] text-yellow-400'>
        {new Array(fullStars).fill(null).map((_, i) => (
          <BsStarFill key={`Fill${i}`} />
        ))}
        {fullStars + emptyStars < 5 && <BsStarHalf />}
        {new Array(emptyStars).fill(null).map((_, i) => (
          <BsStar key={`Empty${i}`} />
        ))}
      </span>
    </div>
  );
};

export default Rating;
