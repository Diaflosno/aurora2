import React, { useState } from "react";
import { useAuth } from "../firebase/AuthContext";
import { Body } from "../components/bodyDesign";

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
            {displayName ? (
                <>
                <Body data={data}/>
                <button onClick={handleLogout}>Cerrar sesión</button>
                </>
            ) : (
                <>
                <div className="bodydiv">
                <h1>LOGIN</h1>
                <h2>Bienvenido {displayName}</h2>
                <button onClick={handleGoogle}>Iniciar sesión con Google</button>
                </div>
                </>
            )}
        </>
    );
}

export default FormsFirebase;