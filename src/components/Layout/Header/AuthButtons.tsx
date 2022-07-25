const AuthButtons: React.FC = () => {
  const isAuthenticated = false;
  return (
    <div>
      {!isAuthenticated ? (
        <button className='dark:bg-jacarta-400 bg-jacarta-800 px-4 py-1 text-white rounded-md'>
          Log In
        </button>
      ) : (
        <button>Log out</button>
      )}
    </div>
  );
};

export default AuthButtons;
