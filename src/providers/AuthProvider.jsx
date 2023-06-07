// import React, { createContext } from 'react';
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
// import app from '../firebase/firebase.config';
// import { useEffect } from 'react';
// import { useState } from 'react';

// export const AuthContext = createContext(null);
// const provider = new GoogleAuthProvider();
// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null)
//     const [loading, setLoading] = useState(true)

//     const createUser = (email, password) => {
//         setLoading(true)
//         return createUserWithEmailAndPassword(auth, email, password)
//     }
//     const signIn = (email, password) => {
//         setLoading(true)
//         return signInWithEmailAndPassword(auth, email, password)
//     }
//     const signInWithGoogle = () => {
//         setLoading(true)
//         return signInWithPopup(auth, provider)
//     }
//     const logOut = () => {
//         setLoading(true)
//         return signOut(auth)
//     }

//     useEffect(() => {
//       const unsubscribe =  onAuthStateChanged(auth, loggedUser => {
//             setUser(loggedUser)
//             setLoading(false)
//         })
//         return ()=>{
//             unsubscribe();
//         }
//     }, [])

//     const authInfo = {
//         user,
//         createUser,
//         signIn,
//         logOut,
//         loading
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;