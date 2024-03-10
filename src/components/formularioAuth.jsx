import React, { useState } from "react";
import { useAuth } from "../firebase/AuthContext";
import { Body } from "./bodyDesign";
import { NavBar } from "./design";
import Home from "./home";

function FormsFirebase( {data} ){

    const auth = useAuth();

    const {displayName} = auth.user;

    const handleGoogle = (e) => {
        e.preventDefault();
        auth.loginWithGoogle();
    };
    const handleLogout = (e) => {
        e.preventDefault();
        auth.logout();
    };
    return (
        <>
            <NavBar handleGoogle={handleGoogle} handleLogout={handleLogout} />
            {displayName ? (
                <>
                <Body data={data}/>
                </>
            ) : (

                <Home />

            )}
        </>
    );
}

export default FormsFirebase;