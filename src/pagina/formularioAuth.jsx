import React, { useState } from "react";
import { useAuth } from "../firebase/AuthContext";
import { Body } from "../components/bodyDesign";
import { NavBar } from "../components/design";
import Home from "../components/home";

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
                <button onClick={handleLogout}>Cerrar sesión</button>
                </>
            ) : (

                <Home />

            )}
        </>
    );
}

export default FormsFirebase;