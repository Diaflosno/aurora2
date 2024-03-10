import React from 'react'
import App from '../App.jsx'


function NavBar() {
    return(
      <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top justify-content-center">
  <div >
    <h6 className="navtitle"> AuroraShop</h6>
  </div>
</nav>
<nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
  <div >
    <h6 className="navtitle">
      TheFqnBest tienda
    </h6>
  </div>
</nav>
</div>

);
}

function Footer() {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start ">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5>Redes sociales:</h5>
            <a href="https://www.instagram.com/auroramusic/" target="_blank" className="icon-link"><i className="fab fa-instagram fa-2x"></i></a>
            <a href="https://www.facebook.com/iamAURORA" target="_blank" className="icon-link"><i className="fab fa-facebook-f fa-2x"></i></a>
            <a href="https://open.spotify.com/intl-es/artist/1WgXqy2Dd70QQOU7Ay074N" target="_blank" className="icon-link"><i className="fab fa-spotify fa-2x"></i></a>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">  
            <p>
              when
            </p>
          </div>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        Jose Moreno - Alfonso Peñuelas
      </div>
    </footer>
  )
}

  
  
      export  { NavBar, Footer };