import React, { useState } from "react";
import { useAuth } from "../firebase/AuthContext";

function FormsFirebase(){

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
            <h1>LOGIN</h1>
            {displayName && <h2>Bienvenido {displayName}</h2>}
            <button onClick={handleGoogle}>Iniciar sesión con Google</button>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </>
    );
}

export default FormsFirebase;