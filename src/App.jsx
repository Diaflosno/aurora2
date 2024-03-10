import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavBar, Footer } from './components/design';
import FormsFirebase from './components/formularioAuth';
import { AuthProvider } from "./firebase/AuthContext";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://aurora-4aa23-default-rtdb.firebaseio.com/items.json")
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => { 
            console.error("Error al obtener los datos",error)
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
    <>
    <div className="bg-image">
    <div className="container">
        <AuthProvider>
      <FormsFirebase  data={data} />
    </AuthProvider>
    </div>
 
      <Footer/>
      </div>

    </>
  );

}

export default App;