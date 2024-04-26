import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app)

// social login auth

const googleProvider = new GoogleAuthProvider()

const FirebaseProvider = ({children}) => {
    const [user, setUser] = useState();





    // create user with email and password
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // sign in with email and password
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // observe
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
             if (currentUser) {
                 setUser(currentUser);
             }
           });
           return () => {
             unSubscribe();
           };
     },[])

    const logOut =()=>{
        setUser(null);
        return signOut(auth)
    }
    
    
    const  userInfo = {
        user,
        createUser,
        logOut,
        loginUser,
        logInWithGoogle
    }




    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

FirebaseProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default FirebaseProvider;