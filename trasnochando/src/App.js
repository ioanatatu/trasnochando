import "./App.css";
import { Link, Switch, Route } from "react-router-dom";

// React
import React, { useEffect, useState } from "react";

// Components
import Login from "./auth/Login";
import Register from "./auth/Register";
import Navbar from "./components/Navbar";

// Firebase
import { auth } from "./firebase/firebase.utils";
/*
 *
 *
 *
 *
 */
const App = () => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged((user) =>
            setCurrentUser(user)
        );
        console.log("user", currentUser);

        return () => {
            unsubscribeFromAuth();
        };
    }, [currentUser]);

    return (
        <div className="App">
            <Navbar currentUser={currentUser} />
            <div style={{ display: "flex" }}>
                <Link to="/">home</Link>
                <Link to="/login">login</Link>
                <Link to="/register">register</Link>
            </div>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </div>
    );
};

export default App;
