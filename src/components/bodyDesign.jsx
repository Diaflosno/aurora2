import React from 'react'
import App from '../App.jsx'
import { useAuth } from "../firebase/AuthContext";
import ConseguirFav from './favoritos.jsx'


const ImageCard = ({ image, title, description }) => {
  const [hover, setHover] = React.useState(false);
const { user } = useAuth();
  const uid = user.uid;
  const AgregarFavorito = () => {
    // Obtener el usuario actual
    // Hacer el post a la base de datos de realtime database
    fetch(`https://aurora-4aa23-default-rtdb.firebaseio.com/favoritos/${uid}.json`, {
      method: 'POST',
      body: JSON.stringify({ image, title, description }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('Post exitoso:', data);
      })
      .catch(error => {
        console.error('Error al hacer el post:', error);
      });
  };

  return (
    <div>
      <div
        className="image-card"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className={`image-wrapper ${hover ? 'hover' : ''}`}
          style={{ border: '3px solid black', borderRadius: '10px' }}
        >
          <img src={image} alt={title} />
        </div>
      </div>
      <div className="image-card">
        <h2 className="tittlecard">{title}</h2>
        <p className="descriptcard">{description}</p>
        <button className="btn btn-primary" onClick={AgregarFavorito}>
          Agregar a favoritos
        </button>
      </div>
    </div>
  );
};



const ImageWrapper = ({ children, hover }) => (
  <div className="image-wrapper-inner">
    {children}
    {hover && <div className="overlay" />}
  </div>
);

ImageCard.Wrapper = ImageWrapper;

function Body({ data }) {
  return (
    <>
    <div className="bodydiv container">
      <div className="image-grid">
        {data.map((item, index) =>
          item !== null ? (
            <ImageCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ) : null
        )}
      </div>
    </div>
    <div>
      <ConseguirFav />
    </div>
    </>
  );
}

export { Body }



