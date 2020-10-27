import React from 'react';
import logo from './img/Logo.png';
import './App.css';

//components
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';

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

         <Home/>
         <About/>

        <footer className="footer">

        </footer>

      </div>
    </div>
  );
}

export default App;
