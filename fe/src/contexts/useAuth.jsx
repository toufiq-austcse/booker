import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log('called AuthProvider');
    async function checkAuth() {
      let res = await isAuthenticated();
      setIsLoggedIn(res.data);
    }

    checkAuth();
  }, []);

  async function isAuthenticated() {
    return axios.get('http://localhost:3000/auth', {
      withCredentials: true
    });
  }

  async function login(email, password) {
    try {
      let res = await axios.post('http://localhost:3000/auth/login', {
        email: email,
        password: password,
      }, {
        withCredentials: true
      });
      setIsLoggedIn(true);
      return res;
    } catch (e) {
      throw new Error(e);
    }

  }

  async function logout() {
    try {
      let res = await axios.post('http://localhost:3000/auth/logout', {}, {
        withCredentials: true
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
      {children}
    </AuthContext.Provider>
  );


}