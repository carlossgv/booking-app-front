import axios from 'axios';
import React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import LoadingPage from '../src/pages/loading/Loading';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserFromCookies() {
      // get cookie from browser
      const access_token = document.cookie.split('=')[1];

      const config = { headers: { Authorization: `Bearer ${access_token}` } };
      const bodyParameters = { access_token: access_token };

      if (access_token) {
        try {
          const user: any = await axios.post(
            `${process.env.AUTH_URL}/validate`,
            bodyParameters,
            config
          );

          if (user) setUser(user.data);
        } catch (error: any) {
          setUser(null);
        }
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  // const login = async ({ email, password }) => {
  //   const { data: token } = await api.post('auth/login', { email, password });
  //   if (token) {
  //     console.log('Got token');
  //     Cookies.set('token', token, { expires: 60 });
  //     api.defaults.headers.Authorization = `Bearer ${token.token}`;
  //     const { data: user } = await api.get('users/me');
  //     setUser(user);
  //     console.log('Got user', user);
  //   }
  // };

  //   const logou?t = (email, password) => {
  //     Cookies.remove('token');
  //     setUser(null);
  //     delete api.defaults.headers.Authorization;
  //     window.location.pathname = '/login';
  //   };

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const ProtectRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  if (
    isLoading ||
    (!isAuthenticated && window.location.pathname !== '/login')
  ) {
    return <LoadingPage />;
  }
  return children;
};
