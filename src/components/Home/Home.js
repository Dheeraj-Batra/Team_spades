import React from "react";
import { Link } from "react-router-dom";
import CareerIntro from "./CareerIntro";
import IntroCard from './IntroCard';
function Home(props) {
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Job app</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/jobopp">Job Opp</a>
              </li> 
            </ul>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/signup">
              <button>signup</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
    <CareerIntro/>
    <div className="container w-100">
          <h1 className='text-center my-4'>Our Services</h1>
        <div className="d-flex align-items-center justify-content-center">
          <div className="col-md-4"><IntroCard /></div>
          <div className="col-md-4"><IntroCard /></div>
          <div className="col-md-4"><IntroCard /></div>
        </div>
      </div>
    </>
  );
}

export default Home;