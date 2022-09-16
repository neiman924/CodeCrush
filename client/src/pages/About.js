import React from "react";

import Navbar from "../components/navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      {/* <!-- header --> */}
      <header id="home" className="header">
        <div className="overlay text-white text-center">

          {/* <!--  About Section  --> */}
          <div>
            <div id="about" class="container-fluid wow fadeIn" data-wow-duration="1.5s">
              <div class="row">
                <div class="col-lg-6 has-img-bg"></div>
                <div class="col-lg-6">
                  <div class="row justify-content-center">
                    <div class="col-sm-8 py-5 my-5">
                      <h2 class="mb-4">So, Why Choose A Dating App Like Code-Crush?</h2>
                      <p>When it comes to dating apps, you’ve got options: Badoo, Bumble, Hinge, Match, POF, OKCupid, and many more. It doesn’t matter if you want to find love, a date, or just have a casual chat,
                        you still want to find an app that’s the right match for you. And it’s not always black and white — when you want to meet new people, your friends at Tinder can help you out with features </p>
                      <p><b>designed to make the impossible possible. Dating online with people they have passionate about coding gets easier.</b></p>
                      <p></p>
                    </div>
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
