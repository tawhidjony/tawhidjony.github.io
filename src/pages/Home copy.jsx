import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="profile-img-area">
        <img className="profile-img" src="./images/we.svg" alt="" />
      </div>
      <div className="container title-typographi">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <h1>HI THERE !</h1>
            <h2>I'M MD TAWHIDUR RAHMAN</h2>
            <p>I am a full stack web developer</p>
            <Link
              to="/Md_Tawhidur_Rahman.pdf"
              target="_blank"
              className="btn btn-primary btn-lg border-0"
            >
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
