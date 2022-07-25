import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import { FaTv } from 'react-icons/fa';
import { TbMovie } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const NavItems: React.FC = () => {
  return (
    <div className='flex text-2xl dark:text-vulcan-100 text-stone-800 md:flex-col gap-8 md:gap-12'>
      <Link to='/movies'>
        <TbMovie />
      </Link>
      <Link to='/television'>
        <FaTv />
      </Link>
      <Link to='/profile/${id}/bookmarks'>
        <BsFillBookmarkHeartFill />
      </Link>
    </div>
  );
};

export default NavItems;
