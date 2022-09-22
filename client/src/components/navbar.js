import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../components/ProfilePic';
import { getRandomItem } from '../utils/helpers';

import Auth from '../utils/auth';
import IMAGES from './images';

export default function navbar() {
  var permission = false;
  var randomImg = getRandomItem(Object.keys(ProfilePic).length);
  var randomPic = (Object.keys(ProfilePic)[randomImg]);

  if (Auth.loggedIn()) {
    permission = Auth.getProfile().data.permission;
  }
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div>
      {/* // <!-- Start Top Nav --> */}
      <nav>
        {/* <!-- Navbar --> */}
        <nav className="custom-navbar navbar navbar-expand-lg navbar-dark fixed-top" data-spy="affix" data-offset-top="10">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Learn">Learn</a>
              </li>
            </ul>
            <a className="navbar-brand m-auto" href="/home">
              <img src={IMAGES.logo} className="brand-img" alt="" />
              <span className="brand-txt">Code Crush</span>
            </a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/Reviews">Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us</a>
              </li>
              {Auth.loggedIn() ? (
              <li className="nav-item">
                      <a className="nav-link" href="/matching">Start Swiping</a>
              </li>):null}
              <li className="nav-item">
                <div>
                  {permission ? (
                    <Link className="btn btn-primary" to="/me">
                      {Auth.getProfile().data.name}Admin
                    </Link>
                  ) : null}
                  {Auth.loggedIn() ? (
                    <>               
                    <li className="nav-item">
                    <Link className="btn btn-primary ml-xl-4" to="/userprofile">
                       Profile
                    </Link>
                      <a className="btn btn-primary ml-xl-4" onClick={logout}>
                        Logout
                      </a>
                    </li>
                    </>
                  ) : ( 
                    <>
                      <Link className="btn btn-primary ml-xl-4" to="/login">
                        Login
                      </Link>
                      <Link className="btn btn-primary ml-xl-4" to="/signup">
                        Signup
                      </Link>
                    </>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </nav>

    </div>
  );
}
