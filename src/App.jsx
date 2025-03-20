import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import './App.css';
import FeaturedShows from "./assets/img/ticket-icon.svg";
import FeaturedImage1 from "./assets/img/the-last-laugh-image-1730348173-870.jpg";
import FeaturedImage2 from "./assets/img/come-alive-image-1721213649-826.jpg";
import FeaturedImage3 from "./assets/img/punch-image-1726213994-849.jpg";
import FeaturedImage4 from "./assets/img/my-neighbour-totoro-image-1681735756-693.jpg";
import FeaturedImage5 from "./assets/img/the-score-image-1725845042-846.jpg";
import FeaturedImage6 from "./assets/img/the-years-image-1730256275-867.jpg";

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
        <section id="features" className="features section">
          <div className="container section-title" data-aos="fade-up">
            <h2><img className="inline-block" src={FeaturedShows} alt="Featured Shows"/> Featured Shows</h2>
            <p>Discover top-rated and trending shows handpicked for you. Stay entertained with the best in drama, comedy, and more!</p>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-5">
              <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                <div className="service-item">
                  <div className="img">
                    <img src={FeaturedImage1} className="img-fluid" alt=""/>
                  </div>
                  <div className="details position-relative">
                    <a href="service-details.html" className="stretched-link">
                      <h3>The Last Laugh</h3>
                    </a>
                    <p>Noël Coward Theatre</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                <div className="service-item">
                  <div className="img">
                    <img src={FeaturedImage2} className="img-fluid" alt=""/>
                  </div>
                  <div className="details position-relative">
                    <a href="service-details.html" className="stretched-link">
                      <h3>Come Alive</h3>
                    </a>
                    <p>The Empress Museum</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                <div className="service-item">
                  <div className="img">
                    <img src={FeaturedImage3} className="img-fluid" alt=""/>
                  </div>
                  <div className="details position-relative">
                    <a href="service-details.html" className="stretched-link">
                      <h3>Punch</h3>
                    </a>
                    <p>Young Vic</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="500">
                <div className="service-item">
                  <div className="img">
                    <img src={FeaturedImage4} className="img-fluid" alt=""/>
                  </div>
                  <div className="details position-relative">
                    <a href="service-details.html" className="stretched-link">
                      <h3>My Neighbour Totoro</h3>
                    </a>
                    <p>Gillian Lynne Theatre</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="600">
                <div className="service-item">
                  <div className="img">
                    <img src={FeaturedImage5} className="img-fluid" alt=""/>
                  </div>
                  <div className="details position-relative">
                    <a href="service-details.html" className="stretched-link">
                      <h3>The Score</h3>
                    </a>
                    <p>Theatre Royal Haymarket</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="700">
                <div className="service-item">
                  <div className="img">
                    <img src={FeaturedImage6} className="img-fluid" alt=""/>
                  </div>
                  <div className="details position-relative">
                    <a href="service-details.html" className="stretched-link">
                      <h3>The Years</h3>
                    </a>
                    <p>Harold Pinter Theatre</p>
                  </div>
                </div>
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