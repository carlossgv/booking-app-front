import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { IUser } from '../src/helpers/user/user.interface';
import LoadingPage from '../src/pages/loading/Loading';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<IUser | null>(null);
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
  }, [user]);

  const login = async (formData: { email: string; password: string }) => {
    const url = `${process.env.AUTH_URL}/login`;
    const response = await axios.post(url, formData);

    const { access_token } = response.data;

    Cookies.set('access_token', access_token);

    // Trick to make loadUserFromCookies to run
    // TODO: find a proper way to do this
    setUser({ id: 0, email: 'load@cookies.trigger' });
  };

  const logout = () => {
    Cookies.remove('access_token');
    setUser(null);
    window.location.pathname = '/login';
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, loading, logout }}
    >
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
