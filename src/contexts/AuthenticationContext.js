import React, { createContext, useState } from 'react';

import { getUserByUsername } from '../services/requests/users';

export const AuthenticationContext = createContext({});

export function AuthenticationProvider({ children }) {
  const [user, setUser] = useState({});

  async function processLogin(username, key) {
    console.log('AuthenticationContext - processLogin');

    if (username !== '' && key !== '') {
      const user = await getUserByUsername(username);

      if (user.error) {
        console.log('UÉ!?   USER:', user);
        return false;
      }

      if (JSON.stringify(user).length === 0 || JSON.stringify(user) === '{}') {
        return false;
      }

      if (user.password === key) {
        console.log('Success Login!');
        setUser(user);
        return true;
      }
    }

    return false;
  }

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        processLogin,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
