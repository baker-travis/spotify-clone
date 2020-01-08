import React, { useContext } from 'react';

const UserContext = React.createContext();

export function UserProvider({ user, children }) {
  return <UserContext.Provider value={user} children={children} />;
};

export function useUser() {
  return useContext(UserContext);
}