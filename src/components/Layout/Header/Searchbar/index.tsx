import { useState } from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      navigate(`/search/${input}`);
    }
    setInput('');
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex-grow flex items-center gap-2 text-lg md:ml-[120px]'
    >
      <RiSearch2Line />
      <input
        type='text'
        placeholder='Search for movies & tv shows'
        className='w-full bg-transparent inline-block border-none outline-none focus:outline-none text-inherit'
        value={input}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
