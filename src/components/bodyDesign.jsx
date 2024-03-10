import React from 'react'
import App from '../App.jsx'

const ImageCard = ({ image, title, description }) => (
  <div className="image-card">
    <img src={image} alt={title} style={{ border: '1px solid black' }} />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);
const images = Array.from({ length: 14 }, (_, i) => i + 1);

function Body({data}) {
    return(
        <div className="App">
          <div className="image-grid">
            {images.map(image => (
              <ImageCard
                key={image}
                image={`https://via.placeholder.com/150/${image}`}
                title={`Titulo de la imagen ${image}`}
                description={`Descripcion breve de la imagen ${image}`}
              />
            ))}
          </div>
        </div>
      );


}
    export {Body} 

/*     <h1>Color: {data.nuevo ? data.nuevo.Color: 'Color not available'}</h1>
 */