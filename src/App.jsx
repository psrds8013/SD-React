import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import './App.css';
import BannerImage from "./assets/img/banner.jpg";
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
        <section id="hero" className="hero section relative">
            <div className="row align-items-center">
              <div className="col-12">
                <img src={BannerImage} className="img-fluid w-100" alt="Banner" />
              </div>
            </div>
        </section>
        <section id="features" className="features section">
          <div className="container section-title" data-aos="fade-up">
            <div className='d-flex align-items-center justify-content-center '>
              <h2><img className="featured-shows-icon" src={FeaturedShows} alt="Featured Shows"/>Featured Shows</h2>
            </div>
            <p>Discover top-rated and trending shows handpicked for you. Stay entertained with the best in drama, comedy, and more!</p>
          </div>
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-4 col-md-6 mb-4">
                  <div className="show-item">
                      <img src="https://seconddegree.co.uk/uploads/event/come-alive-image-1721213649-826_copy.jpg" className="show-image" alt="The Last Laugh"/>
                      <div className="show-details">
                          <h3 className="show-title">The Last Laugh</h3>
                          <p className="show-genre">Noël Coward Theatre</p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                  <div className="show-item">
                      <img src="https://seconddegree.co.uk/uploads/event/come-alive-image-1721213649-826_copy.jpg" className="show-image" alt="Come Alive"/>
                      <div className="show-details">
                          <h3 className="show-title">Come Alive</h3>
                          <p className="show-genre">The Empress Museum</p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                  <div className="show-item">
                      <img src="https://seconddegree.co.uk/uploads/event/come-alive-image-1721213649-826_copy.jpg" className="show-image" alt="Punch"/>
                      <div className="show-details">
                          <h3 class="show-title">Punch</h3>
                          <p class="show-genre">Young Vic</p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                  <div className="show-item">
                      <img src="https://seconddegree.co.uk/uploads/event/come-alive-image-1721213649-826_copy.jpg" className="show-image" alt="My Neighbour Totoro"/>
                      <div className="show-details">
                          <h3 className="show-title">My Neighbour Totoro</h3>
                          <p className="show-genre">Gillian Lynne Theatre</p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                  <div className="show-item">
                      <img src="https://seconddegree.co.uk/uploads/event/come-alive-image-1721213649-826_copy.jpg" className="show-image" alt="The Score"/>
                      <div className="show-details">
                          <h3 className="show-title">The Score</h3>
                          <p className="show-genre">Theatre Royal Haymarket</p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                  <div className="show-item">
                      <img src="https://seconddegree.co.uk/uploads/event/come-alive-image-1721213649-826_copy.jpg" class="show-image" alt="The Years"/>
                      <div className="show-details">
                          <h3 className="show-title">The Years</h3>
                          <p className="show-genre">Harold Pinter Theatre</p>
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