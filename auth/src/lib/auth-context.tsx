'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { 
  getAuthState, 
  setAuthState, 
  getUserData, 
  setUserData, 
  clearAuthData, 
  subscribeToAuthChanges, 
  StoredUser 
} from '@daylix/utils';

interface AuthContextType {
  isAuthenticated: boolean;
  user: StoredUser | null;
  login: (user: StoredUser) => void;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<StoredUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Initialize authentication state
    const authState = getAuthState();
    setIsAuthenticated(authState);

    // Get user data if authenticated
    if (authState) {
      const userData = getUserData();
      setUser(userData);
    }

    // Subscribe to authentication state changes
    const unsubscribe = subscribeToAuthChanges((isAuth) => {
      setIsAuthenticated(isAuth);
      if (!isAuth) {
        setUser(null);
      } else {
        const currentUser = getUserData();
        if (!currentUser) return;
        setUser(currentUser);
      }
    });

    // Handle localStorage changes (for synchronization between tabs)
    const handleStorageChange = () => {
      const newAuthState = getAuthState();
      setIsAuthenticated(newAuthState);
      
      if (newAuthState) {
        setUser(getUserData());
      } else {
        setUser(null);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    setLoading(false);

    return () => {
      unsubscribe();
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const login = (userData: StoredUser) => {
    setAuthState(true);
    setUserData(userData);
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = async () => {
    try {
      // Clearing authentication data in localStorage
      clearAuthData();
      
      // Calling the API to delete cookies
      await fetch('/api/auth/logout', {
        method: 'POST',
      });
      
      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
};
