import React from 'react'
import App from '../App.jsx'


function NavBar() {
    return(
      <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top justify-content-center">
  <div >
    <h6 className="navtitle fas fa-star "> AuroraShop</h6>
  </div>
</nav>
<nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
  <div >
  <h0> s</h0>
    <h3 className="navbar navtitle fas fa-star">
      EasterEgg
    </h3>
  </div>
</nav>
</div>

);
}

function Footer() {
  return (
    <footer className=" text-center text-lg-start bg-dark">
      <div className="container p-4">
     
          <div className=" text-center">
            <a href="https://www.instagram.com/auroramusic/" target="_blank" className="icon-link"><i className="fab fa-instagram fa-3x"></i></a>
            <a href="https://www.facebook.com/iamAURORA" target="_blank" className="icon-link"><i className="fab fa-facebook-f fa-3x"></i></a>
            <a href="https://open.spotify.com/intl-es/artist/1WgXqy2Dd70QQOU7Ay074N" target="_blank" className="icon-link"><i className="fab fa-spotify fa-3x"></i></a>
          </div>

      </div>
      <div className="text-center p-3 bg-dark" >
        <h3 style={{ color: 'aliceblue' }}  >Sigue a <strong>Aurora</strong> en sus redes sociales</h3>
      </div>
    </footer>
  )
}

  
  
      export  { NavBar, Footer };