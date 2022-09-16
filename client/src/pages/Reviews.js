import React from "react";

import Navbar from "../components/navbar";

export default function Reviews() {
  return (
    <div>
      <Navbar />
      {/* <!-- header --> */}
      <header id="home" className="header">
        <div className="overlay text-white text-center">

          {/* <!-- REVIEWS Section  --> */}
          <div id="testmonial" className="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items">
            <h2 className="section-title my-5 text-center">REVIEWS</h2>
            <div className="row mt-3 mb-5">
              <div className="col-md-4 my-3 my-md-0">
                <div className="testmonial-card">
                  <h3 className="testmonial-title">John Doe</h3>
                  <h6 className="testmonial-subtitle">Web Designer</h6>
                  <div className="testmonial-body">
                    <p>Thanks to this app I have found the love of the love of my life and we are to be married. After going on a few dates and having a few fun nights I came across Miranda. after reading her profile I couldn't resist swiping tight to read her final sentence... 'looking for my supper developer babe for life'. After talking for about a week we went out on our first date and I knew there was something special about her!</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-3 my-md-0">
                <div className="testmonial-card">
                  <h3 className="testmonial-title">Steve Thomas</h3>
                  <h6 className="testmonial-subtitle">UX/UI Designer</h6>
                  <div className="testmonial-body">
                    <p>Thanks to this app I have found the love of the love of my life and we are to be married. After going on a few dates and having a few fun nights I came across Miranda. after reading her profile I couldn't resist swiping tight to read her final sentence... 'looking for my supper developer babe for life'. After talking for about a week we went out on our first date and I knew there was something special about her!</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-3 my-md-0">
                <div className="testmonial-card">
                  <h3 className="testmonial-title">Miranda Joy</h3>
                  <h6 className="testmonial-subtitle">Graphic Designer</h6>
                  <div className="testmonial-body">
                    <p>Thanks to this app I have found the love of the love of my life and we are to be married. After going on a few dates and having a few fun nights I came across Miranda. after reading her profile I couldn't resist swiping tight to read her final sentence... 'looking for my supper developer babe for life'. After talking for about a week we went out on our first date and I knew there was something special about her!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </header>
    </div>
  );
}
