import useTheme from '@/hooks/useTheme';
import { MdBrightness5, MdBrightness4 } from 'react-icons/md';

const ToggleThemeBtn: React.FC = () => {
  const [theme, toggleTheme] = useTheme();
  return (
    <button
      onClick={() => toggleTheme()}
      className='dark:text-vulcan-100 text-stone-800 text-2xl'
    >
      {theme === 'dark' ? <MdBrightness5 /> : <MdBrightness4 />}
    </button>
  );
};

export default ToggleThemeBtn;
