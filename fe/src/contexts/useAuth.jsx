import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let history = useHistory();

  useEffect(() => {
    setLoading(true);

    async function checkAuth() {
      try {
        console.log('called');
        let res = await isAuthenticated();
        setIsLoggedIn(res.data);
        setLoading(false);

      } catch (e) {
        console.log('error', e);
        setLoading(false);
        if (!isLoggedIn) {
          history.push('/login');
        }
      }

    }

    checkAuth();
  }, []);

  async function isAuthenticated() {
    return axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}/auth`, {
      withCredentials: true,
    });
  }

  async function login(email, password) {
    try {
      let res = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}/auth/login`, {
        email: email,
        password: password,
      }, {
        withCredentials: true,
      });
      setIsLoggedIn(true);
      return res;
    } catch (e) {
      throw new Error(e);
    }

  }

  async function logout() {
    try {
      let res = await axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}/auth/logout`, {}, {
        withCredentials: true,
      });
      setIsLoggedIn(false);
      return res;
    } catch (err) {
      throw new Error(err);
    }

  }

  const value = {
    login,
    logout,
    isLoggedIn,
    //isAuthenticated,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );


}