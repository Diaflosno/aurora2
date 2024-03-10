import React from 'react'
import App from '../App.jsx'

const ImageCard = ({ image, title, description }) => (
  <div className="image-card">
    <img src={image} alt={title} style={{ border: '1px solid black' }} />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

function Body({data}) {
    return(
      <div className="bodydiv">
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
      );


}
    export {Body} 
