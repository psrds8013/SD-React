import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <section id="hero" className="hero section dark-background">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-in">
                <h1>Your new digital experience with Bocor</h1>
                <p>We are team of talented designers making websites with Bootstrap</p>
                <div className="d-flex">
                  <a href="#about" className="btn-get-started">Get Started</a>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="100">
                <img src="assets/img/hero-img.png" className="img-fluid animated" alt=""/>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}
export default App;