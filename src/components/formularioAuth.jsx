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
                <div className="bg-image2">
                <div className="container">
                <Body data={data}/>
                </div>
                </div>
                </>
            ) : (
                <div className="bg-image">
                <div className="container">
                <Home />
            </div>
            </div>
            )}
        </>
    );
}

export default FormsFirebase;