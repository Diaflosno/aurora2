import React, { useState, useEffect } from "react";
import { useAuth } from "../firebase/AuthContext";
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";

function ConseguirFav () {
    const [datau, setDatau] = useState({});
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();
  const uid = user.uid;
  
    useEffect(() => {
        console.log("uid",uid)
      axios.get(`https://aurora-4aa23-default-rtdb.firebaseio.com/favoritos/${uid}.json`)
          .then((response) => {
              setDatau(response.data);
              console.log("Datos de favoritos cargados correctamente")

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


    const ImageCardFavorite = ({ image, title, description }) => {
        const { user } = useAuth();
        const uid = user.uid;

        const EliminarFavorito = () => {
            // Obtener el usuario actual
            // Hacer el post a la base de datos de realtime database
            fetch(`https://aurora-4aa23-default-rtdb.firebaseio.com/favoritos/${uid}.json`, {
              method: 'DELETE',
              body: JSON.stringify({ image, title, description }),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then(response => response.json())
              .then(data => {
                console.log('Delete exitoso:');
              })
              .catch(error => {
                console.error('Error al hacer el DELETE:', error);
              });
          };

        return (
          <div>
            <div className="image-cardFav">
              <div style={{ border: '3px solid black', borderRadius: '10px' }}>
                <img src={image} alt={title} />
              </div>
            </div>
            <div className="image-cardFav">
              <h2 className="tittlecard">{title}</h2>
              <p className="descriptcard">{description}</p>
              <button className="btn btn-danger" onClick={EliminarFavorito}>
          Eliminar de favoritos
        </button>
            </div>
          </div>
        );
      }

    if (!datau) {
        return <div>No hay nada en favoritos</div>
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Favoritos</h1>
                    </div>
                </div>
                <div className="row">
                    {Object.keys(datau).map((key) => (
                        <div className="col-12 col-md-4" key={key}>
                            <ImageCardFavorite
                                image={datau[key].image}
                                title={datau[key].title}
                                description={datau[key].description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
    }
export default ConseguirFav;
