import { RiSearch2Line } from 'react-icons/ri';

const SearchBar: React.FC = () => {
  return (
    <form className='flex-grow flex items-center gap-2 text-lg md:ml-[120px]'>
      <RiSearch2Line />
      <input
        type='text'
        placeholder='Search for movies & tv shows'
        className='w-full bg-transparent inline-block border-none outline-none focus:outline-none text-inherit'
      />
    </form>
  );
};

export default SearchBar;
