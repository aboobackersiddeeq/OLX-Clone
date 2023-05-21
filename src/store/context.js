import { createContext, useState } from "react";
export const firebaseContext = createContext(null);

export const Authcontext = createContext(null);

export default function Context({ children }) {
  const [user, setuser] = useState(null);
  return (
    <Authcontext.Provider value={{ user, setuser }}>
      {children}
    </Authcontext.Provider>
  );
}
