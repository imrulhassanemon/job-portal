import { Children, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { Toaster } from "react-hot-toast";


const AuthProvider = ({children}) => {


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
        userSignOut

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