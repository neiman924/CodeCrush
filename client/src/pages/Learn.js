import React from "react";

import Navbar from "../components/navbar";
import IMAGES from "../components/images";

export default function Learn() {
  const margin = {
    marginBottom: '100px'
  }
  return (
    <div>
      <Navbar />
      {/* <!-- header --> */}
      <header id="home">
        <div >
          <div >

            {/* <!--  gallary Section  --> */}
            <div className="gallary row">
              <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                <img src={IMAGES.ExploreYourPassions} alt="" className="gallary-img" />
                <a href="/#" className="gallary-overlay">
                  <i className="gallary-icon"><h4>Explore Your Passions</h4> <br /><h5>It’s easy to chat up a match when you know you have something in common.</h5></i>
                </a>
              </div>
              <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                <img src={IMAGES.RollWithUsAnywhere} alt="" className="gallary-img" />
                <a href="/#" className="gallary-overlay">
                  <i className="gallary-icon"><h4>Roll With Us Anywhere</h4> <br /><h5>When you want to meet local people whether you’re visiting New York City or Chicago, there’s an app for that—and it’s called Tinder. Chat with people near and far with features that let you match around the world. Tinder is your go-to travel buddy. We’ve got you covered in 190 countries, and not even our friends at OKCupid and Plenty of Fish can say that.</h5></i>
                </a>
              </div>
              <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                <img src={IMAGES.FacetoFace} alt="" className="gallary-img" />
                <a href="/#" className="gallary-overlay">
                  <i className="gallary-icon "><h4>Date Safer With Face to Face</h4> <br /><h5>We’re all eager to meet new people IRL, but dating during COVID-19 means putting your safety first. When six feet apart isn’t enough, Face to Face lets you video chat with your match so you can keep the connection going online.</h5></i>
                </a>
              </div>
              <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                <img src={IMAGES.ConnectWithPeopleEverywhere} alt="" className="gallary-img" />
                <a href="/#" className="gallary-overlay">
                  <i className="gallary-icon "><h4>Connect With People Everywhere</h4> <br /><h5>Go beyond your distance settings and chat with people around the world with our Passport™ feature. All it takes is an upgrade to a Tinder Plus® subscription to be able to match anywhere from everywhere.</h5></i>
                </a>
              </div>
              <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                <img src={IMAGES.verify} alt="" className="gallary-img" />
                <a href="/#" className="gallary-overlay">
                  <i className="gallary-icon "><h4>Get Verified</h4> <br /><h5>It’s easy to chat up a match when you know you have something in common.</h5></i>
                </a>
              </div>
              <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                <img src={IMAGES.finger} alt="" className="gallary-img" />
                <a href="/#" className="gallary-overlay">
                  <i className="gallary-icon "><h4>Matches at Your Fingertips</h4> <br /><h5>One of the most adult decisions you’ll make is picking a dating app that can offer you all the things your ex couldn’t. And it’s not just as simple as choosing between Badoo or Zoosk. Meeting people online is a journey, and you want someone along for the ride that you can trust. When it comes to making a match, consider the Tinder app your new copilot.</h5></i>
                </a>
              </div>
              <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                <img src={IMAGES.who} alt="" className="gallary-img" />
                <a href="/#" className="gallary-overlay">
                  <i className="gallary-icon "><h4>See Who Likes You</h4> <br /><h5>There are only so many hours in a day for dating. We get it. A Tinder Gold™ subscription lets you see all the people who Like you, saving you precious time so you can focus on the finer things in life.</h5></i>
                </a>
              </div>
              <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                <img src={IMAGES.Inclusive} alt="" className="gallary-img" />
                <a href="/#" className="gallary-overlay">
                  <i className="gallary-icon "><h4>All the Time</h4> <br /><h5>We’re not a fan of labels, so we offer a dating experience designed to connect you with new people outside your usual circles. </h5></i>
                </a>
              </div>
              <p className={margin}></p>
            </div>

          </div>
        </div>
      </header>
    </div>
  );
}

