import { createContext } from 'react';

export const AppContext = createContext({
  userName: '',
  setUserName: (userName) => { },
})