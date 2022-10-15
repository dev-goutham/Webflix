import { useAuth0, User } from '@auth0/auth0-react';
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

interface IAuthContext {
  login: () => Promise<void>;
  isAuthenticated: boolean;
  accessToken: string | null;
  user: User | undefined;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<IAuthContext>({
  accessToken: null,
  isAuthenticated: false,
  login: async () => {
    console.log('login');
  },
  logout: () => {
    console.log('logout');
  },
  user: undefined,
  isLoading: true,
});

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const {
    isAuthenticated,
    user,
    isLoading,
    logout: auth0Logout,
    loginWithPopup,
    getAccessTokenSilently,
    // getAccessTokenWithPopup,
  } = useAuth0();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently({
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
      })
        .then((res) => {
          setAccessToken(res);
        })
        .catch((err) => {
          console.log(err);
        });
      // getAccessTokenSilently({
      //   audience: import.meta.env.VITE_AUTH0_AUDIENCE,
      // })
      //   .then((res) => {
      //     setAccessToken(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
  }, [isAuthenticated]);

  const login = async () => {
    try {
      await loginWithPopup();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await auth0Logout({
      returnTo: window.location.origin,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        accessToken,
        isAuthenticated,
        logout,
        user,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

// export default useAuth;
