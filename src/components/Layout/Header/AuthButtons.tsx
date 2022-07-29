const AuthButtons: React.FC = () => {
  const isAuthenticated = false;
  return (
    <div>
      {!isAuthenticated ? (
        <button className='dark:bg-jacarta-200 bg-jacarta-800 px-4 py-1 dark:text-jacarta-800 text-white rounded-md'>
          Log In
        </button>
      ) : (
        <button>Log out</button>
      )}
    </div>
  );
};

export default AuthButtons;
