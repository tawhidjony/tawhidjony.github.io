import React from "react";
import { NavLink, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

const App = () => {
  return (
    <>
      <div className="index-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 mx-auto mt-5">
              <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent">
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink
                          exact
                          activeClassName="active"
                          className="nav-link"
                          aria-current="page"
                          to="/"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink exact activeClassName="active" className="nav-link " aria-current="page" to="/projects">
                          Project
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink exact activeClassName="active" className="nav-link " aria-current="page" to="/about">
                          About
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink exact activeClassName="active" className="nav-link " aria-current="page" to="/contact">
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
