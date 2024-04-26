import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app)

// social login auth

const googleProvider = new GoogleAuthProvider()

const FirebaseProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    


    // create user with email and password
    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // sign in with email and password
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateProfileInfo =(displayName, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser ,{displayName, photoURL})
    }

    // observe
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
             if (currentUser) {
                setLoading(false)
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
        logInWithGoogle,
        updateProfileInfo
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