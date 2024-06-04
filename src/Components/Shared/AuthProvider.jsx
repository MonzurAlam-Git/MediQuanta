import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../../firebase.config";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const AuthContext = useContext();
  const auth = getAuth(app);

  const createUser = (auth, email, passsword) => {
    return createUserWithEmailAndPassword(auth, email, passsword);
  };
  const demoData = {
    name: "monzur",
    age: 21,
  };

  const sharedInfo = { demoData };

  return (
    <AuthContext.Provider value={sharedInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
