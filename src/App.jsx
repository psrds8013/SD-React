import React from 'react';
import './App.css';

function App() {
  return (
    <main className='flex flex-col min-h-screen'>
      <header className='bg-gray-800 text-white text-center py-3'>
        <div className="container xl:container lg:container md:container sm:container mx-auto">
          <div className="logo lg:text-center flex items-center justify-center">
            <a href="/"><img className="w-40 md:w-32" src="/logo.png" alt="logo"/></a> 
          </div>
        </div>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2025 My Homepage. All rights reserved.</p>
      </footer>
    </main>
  )
}
export default App;