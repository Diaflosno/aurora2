import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavBar, Footer } from './components/design';
import {Body} from './components/bodyDesign'

function App() {
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
    return <p>Cargando...</p>;
  }

  return (
    <>
    <div className="app container">
      <div className="row">
      <NavBar/>
       </div>
      <div className="row mt-4">
        <div className="col-lg-6">
      <Body data={data}/>
        </div>
        <div className="col-lg-6 mt-4 mt-lg-0">
      <Footer/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;