import React, {createContext} from 'react';
import {signIn} from '../services/auth';

interface AuthContextData {
  signed: boolean;
  token: string;
  user: object;
}

const response = await signIn();

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  return (
    <AuthContext.Provider value={{signed: false, token: '', user: {}}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;