import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebase";


export const AuthContext = createContext();

const Auth = ({ children }) => {
  const [user, setUser] = useState(null);

  if(!user){
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
