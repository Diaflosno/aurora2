import React from 'react'
import App from '../App.jsx'
import { FaSignInAlt, FaStar, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../firebase/AuthContext";

function NavBar({ handleGoogle, handleLogout }) {
    const { user, loginWithGoogle } = useAuth();

    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top justify-content-between">
                <div className="navbar-brand">
                    <h6 className="navtitle fas fa-star"> AuroraShop</h6>
                </div>
                <ul className="navbar-nav">
                    {!user ? (
                        <li className="nav-item">
                            <a className="navsesion" href="" onClick={handleGoogle}>
                                <FaSignInAlt /> Iniciar sesion
                            </a>
                        </li>
                    ) : (
                        <>
                            <li className="nav-item">
                                <a className="navsesion" href="">
                                    Favoritos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="navsesion" href="" onClick={handleLogout}>
                                    <FaSignOutAlt /> Cerrar sesion
                                </a>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    )
}

function Footer() {
    return (
        <footer className=" text-center text-lg-start bg-dark">
            <div>
                <div className=" text-center">
                    <a href="https://www.instagram.com/auroramusic/" target="_blank" className="icon-link"><i className="fab fa-instagram fa-3x"></i></a>
                    <a href="https://www.facebook.com/iamAURORA" target="_blank" className="icon-link"><i className="fab fa-facebook-f fa-3x"></i></a>
                    <a href="https://open.spotify.com/intl-es/artist/1WgXqy2Dd70QQOU7Ay074N" target="_blank" className="icon-link"><i className="fab fa-spotify fa-3x"></i></a>
                </div>
            </div>
            <div className="text-center p-3 bg-dark" >
                <h3 style={{ color: 'aliceblue' }}  >Sigue a <strong>Aurora</strong> en sus redes sociales</h3>
            </div>
        </footer>
    )
}

export  { NavBar, Footer };