import React, { useState } from "react";
import { useAuth } from "../firebase/AuthContext";
import { Body } from "./bodyDesign";
import { NavBar } from "./design";
import Home from "./home";

function conseguirFav () {
    const [datau, setDatau] = useState({});
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();
  const uid = user.uid;
// ENSEÑANDO GIT
  
    useEffect(() => {
        console.log("uid",uid)
      axios.get(`https://aurora-4aa23-default-rtdb.firebaseio.com/favoritos/${uid}.json`)
          .then((response) => {
              setDatau(response.data);
              console.log("response",response.data)

          })
          .catch((error) => { 
              console.error("Error al obtener los datos de los favoritos",error)
          })
          .finally(() => {
              setLoading(false);
          });
    }, []);
  
    if (loading) {
      return (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <ClipLoader size={50} color="#000" loading={loading} />
        </div>
  
      );
    }
    return (
        <></>
    );
    }


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
                <Home handleGoogle={handleGoogle} />
            </div>
            </div>
            )}
        </>
    );
}

export default FormsFirebase;