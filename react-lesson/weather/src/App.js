import React from 'react';
import logo from './img/Logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header-top">
              <nav className="navigator">
                <a className="navigator__item" href="#">Home</a>
                <a className="navigator__item" href="#">About us</a>
                <a className="navigator__item" href="#">Team</a>
                <img src={logo} className="navigator__item" href="#"></img>
                <a className="navigator__item" href="#">Services</a>
                <a className="navigator__item" href="#">Blog</a>
                <a className="navigator__item" href="#">Contact us</a>
              </nav>
            </div>
          </div>
        </header>

        <main className="main-content">
          <div className="banner">
            <div className="banner-content">
              <h2>We build it with passion</h2>
              <p>Just to be clear, we do this for fun not for you, just kidding.</p>
              <button type="button">Read more</button>
            </div>
          </div>

          <div className="about-us">
            
          </div>


        </main>

        <footer className="footer">

        </footer>

      </div>
    </div>
  );
}

export default App;
