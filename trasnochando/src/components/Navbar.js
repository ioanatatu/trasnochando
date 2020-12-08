import React from "react";

// Firebase
import { auth } from "../firebase/firebase.utils";

const Navbar = ({ currentUser }) => {
    return (
        <div>
            {currentUser ? (
                <button onClick={() => auth.signOut()}>sign out</button>
            ) : (
                <button onClick={() => auth.signIn()}>sign in</button>
            )}
        </div>
    );
};

export default Navbar;