import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to='/'>
      <img
        src='/images/webflix-logo.png'
        alt='logo'
        className='h-[24px] w-[100px] inline-block'
      />
    </Link>
  );
};

export default Logo;
