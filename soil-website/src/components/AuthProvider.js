import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
 
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isLoggedIn') === 'true');


  const signIn = (email, password) => {
    const storedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
    const profile = storedProfiles.find(p => p.email === email && p.password === password);
    if (profile) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('loggedInEmail', email); // Keep track of who's logged in.
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  // Function to handle new user sign-up.
  const signUp = (name, email, password) => {
    const storedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
    const existingProfile = storedProfiles.find(profile => profile.email === email);
    if (existingProfile) {
      alert('Email already in use');
      return;
    }
    const newProfile = { name, email, password, dateOfJoining: new Date().toISOString() };
    storedProfiles.push(newProfile);
    localStorage.setItem('profiles', JSON.stringify(storedProfiles));
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('loggedInEmail', email); // Keep track of who's logged in.
    setIsAuthenticated(true);
  };

  // Function to handle user sign-out.
  const signOut = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInEmail'); // Clear the logged-in user.
    setIsAuthenticated(false);
  };

  // Provide state and functions to the context consumers.
  const value = { isAuthenticated, signIn, signUp, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
