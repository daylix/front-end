'use client';

const AUTH_KEY = 'daylix_auth_state';
const USER_KEY = 'daylix_user';
const AUTH_STATE_CHANGE_EVENT = 'daylixAuthStateChange';

export interface StoredUser {
  id: string;
  username: string;
  email: string;
}

/**
 * Stores authentication state in localStorage and triggers a state change event
 */
export function setAuthState(isAuthenticated: boolean): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(AUTH_KEY, JSON.stringify(isAuthenticated));

    // Trigger a custom event to notify about authentication state changes
    window.dispatchEvent(new CustomEvent(AUTH_STATE_CHANGE_EVENT, {
      detail: { isAuthenticated }
    }));
  }
}

/**
 * Retrieves authentication state from localStorage
 */
export function getAuthState(): boolean {
  if (typeof window !== 'undefined') {
    const authState = localStorage.getItem(AUTH_KEY);
    return authState ? JSON.parse(authState) : false;
  }
  return false;
}

/**
 * Stores user data in localStorage
 */
export function setUserData(user: StoredUser): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
}

/**
 * Retrieves user data from localStorage
 */
export function getUserData(): StoredUser | null {
  if (typeof window !== 'undefined') {
    const userData = localStorage.getItem(USER_KEY);
    return userData ? JSON.parse(userData) : null;
  }
  return null;
}

/**
 * Removes all authentication data from localStorage and triggers a state change event
 */
export function clearAuthData(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(USER_KEY);

    // Trigger a custom event to notify about logout
    window.dispatchEvent(new CustomEvent(AUTH_STATE_CHANGE_EVENT, {
      detail: { isAuthenticated: false }
    }));
  }
}

/**
 * Checks if the user is authenticated
 */
export function isAuthenticated(): boolean {
  return getAuthState();
}

/**
 * Adds an event listener to track authentication state changes
 */
export function subscribeToAuthChanges(callback: (isAuthenticated: boolean) => void): () => void {
  if (typeof window === 'undefined') {
    return () => { /* noop */ };
  }

  // Event handler function
  const handleAuthChange = (event: Event) => {
    const customEvent = event as CustomEvent;
    const isAuthenticated = customEvent.detail?.isAuthenticated;
    callback(isAuthenticated);
  };

  // Add event listener
  window.addEventListener(AUTH_STATE_CHANGE_EVENT, handleAuthChange);

  // Return a function to remove the event listener
  return () => {
    window.removeEventListener(AUTH_STATE_CHANGE_EVENT, handleAuthChange);
  };
}
