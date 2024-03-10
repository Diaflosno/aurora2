import React from 'react'
import App from '../App.jsx'

const ImageCard = ({ image, title, description }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <div >
    <div
      className="image-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
    <div
      className={`image-wrapper ${hover ? 'hover' : ''}`}
      style={{ border: '3px solid black', borderRadius: '10px' }}
    >
      <img src={image} alt={title} />
    </div>
    </div>
      <div className="image-card">
      <h2 className="tittlecard">{title}</h2>
      <p className="descriptcard" >{description}</p>
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
  );
}

export { Body }