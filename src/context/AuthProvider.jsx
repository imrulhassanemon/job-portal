import { Children, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { Toaster } from "react-hot-toast";


const AuthProvider = ({children}) => {

    const Provider = new GoogleAuthProvider()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, passowrd) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email, passowrd)
    }

    const signInUser = (email, passowrd) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, passowrd)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, Provider, )
    }

    const userSignOut = () => {
        signOut(auth)
        .then(res => {
            console.log(res);
        })
        .catch(data => {
            console.log(data);
        })
    }

    const authInfo = {
        user, 
        loading,
        createUser,
        signInUser,
        userSignOut,
        signInWithGoogle

    }

    useEffect(()=> {
        const unsubscribe  = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('state captured', currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            <Toaster></Toaster>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;