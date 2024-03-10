import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavBar, Footer } from './components/design';
import {Body} from './components/bodyDesign'
import FormsFirebase from './pagina/formularioAuth';
import { AuthProvider } from "./firebase/AuthContext";

function App() {
  const [user] =""
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://aurora-4aa23-default-rtdb.firebaseio.com/productos.json")
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
    return <div>Cargando...  <div className="spinner-border" role="status">ola</div></div>
    ;
  }

  return (
    <>
      <NavBar/>
      <AuthProvider>
      <FormsFirebase />
    </AuthProvider> 
      <Body data={data}/>
      <Footer/>
    </>
  );

}

export default App;