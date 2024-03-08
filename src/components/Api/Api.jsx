import axios from 'axios';
import { useState, useEffect } from "react";
import React from "react";

const Api = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Nuevo estado de carga


    useEffect(() => {
        axios.get("https://aurora-4aa23-default-rtdb.firebaseio.com/productos.json")
            .then((response) => { console.log(response.data)
            })
            .then((response) => {
                setData(data);
            })
            .catch((error) => { 
                console.error("Error al obtener los datos",error)
            })
            .finally(() => {
                setLoading(false); // Cambia el estado de carga
            });
            
    }, []);

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <>
            <h1>Productos</h1>
            
            
        </>
    )
}
export default Api;