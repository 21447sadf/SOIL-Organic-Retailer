// due to the navabar not being updated automatically when the state was passed to it, i had to use this.

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInEmail');
    setIsUserLoggedIn(false);
};
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsUserLoggedIn(loggedIn);
  }, []);

   // Listen for changes in local storage
   useEffect(() => {
    const handleStorageChange = () => {
      const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
      setIsUserLoggedIn(loggedInStatus);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
