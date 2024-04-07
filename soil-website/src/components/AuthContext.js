import React, { createContext, useState, useContext, useEffect } from 'react';

// Creating a context for authentication which can be accessed throughout the component tree.
const AuthContext = createContext(null);

// Custom hook that simplifies the usage of AuthContext in other components.
export const useAuth = () => useContext(AuthContext);

// Component that provides authentication-related data and functions to its children.
export const AuthProvider = ({ children }) => {
    // State that determines if the user is authenticated.
    // This is initially set based on the presence of 'profile' in local storage.
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('profile'));
  
    useEffect(() => {
        const handleStorageChange = () => {
            setIsAuthenticated(localStorage.getItem('isLoggedIn') === 'true');
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);
    // Function to handle user sign-in. It should be called with email and password.
    const signIn = (email, password) => {
        // Retrieve the stored profile from local storage.
        const storedProfile = localStorage.getItem('profile');
        const profile = storedProfile && JSON.parse(storedProfile);

        // If a profile is found and the email and password match, set isAuthenticated to true.
        if (profile && profile.email === email && profile.password === password) {
            setIsAuthenticated(true);
            
        } else {
          
        }
    };

    // Function to handle new user sign-up.
    const signUp = (name, email, password) => {
      
        const profile = { name, email, password };
        localStorage.setItem('profile', JSON.stringify(profile));
        setIsAuthenticated(true); // Set the user as authenticated after signing up.
     
        
    };

    // Function to handle user sign-out.
    const signOut = () => {
      
        localStorage.removeItem('isLoggedIn');
        setIsAuthenticated(false); // Update the state to reflect the user is no longer authenticated.
       
    };

   
    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};
