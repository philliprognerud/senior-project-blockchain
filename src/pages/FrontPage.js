import React, { Component } from "react";
import "./frontpage.css";
import deviceImg from "../components/images/device.jpg";
import car from "../components/images/car1.jpg";
import data from "../components/images/data.jpg"
import dom from "../components/images/dom.jpg";
import phil from "../components/images/phil.jpg";
import dave from "../components/images/dave.jpg";


class FrontPage extends Component {
	constructor(props) {
    super(props);
  }

  render() {
  	return (
  		<div>
        {/*<!-- Masthead -->*/}
        <header className="hero">
          <div className="overlay"></div>
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-half has-text-centered">
                  <p className="title is-1 has-text-white" 
                    style={{ textShadow: "0 2px 8px rgba(0,0,0,2)"}}>
                    Car ID &amp; Analytics
                  </p>
                  <p class="subtitle is-3 has-text-white" 
                    style={{ textShadow: "0 2px 8px rgba(0,0,0,2)"}}>
                    Get your car's health history
                  </p>
                  <form>
                    <div className="field is-grouped">
                      <div className="control is-expanded">
                        <input className="input is-medium" type="text" placeholder="Enter VIN" />
                      </div>
                      <div className="control">
                        <button type="submit" 
                          className="button is-medium is-info">
                          Get Report
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/*<!-- Icons Grid -->*/}
        <section className="section features-icons bg-light text-center">
          <div className="container">
            <div className="columns has-text-centered">
              <div className="column">
                <div className="features-icons-item">
                  <span className="features-icons-icon icon is-large">
                    <i class="fas fa-car fa-5x" aria-hidden="true"></i>
                  </span>
                  <p className="title is-3" style={{ paddingTop: "0.5em" }}>
                    Buyer Friendly
                  </p>
                  <p className="subtitle is-5" style={{ paddingTop: "1em" }}>
                    View a complete report of your future car.
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="features-icons-item">
                  <span className="features-icons-icon icon is-large">
                    <i class="fas fa-chart-bar fa-5x" aria-hidden="true"></i>
                  </span>
                  <p className="title is-3" style={{ paddingTop: "0.5em" }}>
                    History &amp; Analytics
                  </p>
                  <p className="subtitle is-5" style={{ paddingTop: "1em" }}>
                    See a detailed history and overall health of your car, down to specific parts.
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="features-icons-item">
                  <span className="features-icons-icon icon is-large">
                    <i class="fas fa-lock fa-5x" aria-hidden="true"></i>
                  </span>
                  <p className="title is-3" style={{ paddingTop: "0.5em" }}>
                    Secure
                  </p>
                  <p className="subtitle is-5" style={{ paddingTop: "1em" }}>
                    Using blockchain techonology, your data is guaranteed tamper free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*<!-- Image Showcases -->*/}
        <section className="section showcase">
          <div className="container is-fluid">
            <div className="columns is-multiline" 
              style={{boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
              <div className="column is-half showcase-img">
                <img src={deviceImg} alt=""/>
              </div>
              <div className="column is-half has-text-centered showcase-text"
              	style={{ marginBottom: "0px", paddingTop: "10%"}}>
                <p className="title is-2">Use our device.</p>
                <p className="subtitle is-5" style={{ paddingTop: "1em" }}>
                	Just plug the easy to use device into your vehicle to start tracking.
                </p>
              </div>
              <div className="column is-half has-text-centered showcase-text"
              	style={{ marginBottom: "0px", paddingTop: "10%" }}>
                <p className="title is-2">View Part Health</p>
                <p className="subtitle is-5" style={{ paddingTop: "1em" }}>
                	See the current conditions each part of your vehicle.
                </p>
              </div>
              <div className="column is-half showcase-img">
                <img src={car} alt=""/>
              </div>
              <div className="column is-half showcase-img">
                <img src={data} alt=""/>
              </div>
              <div className="column is-half has-text-centered showcase-text"
              	style={{ paddingTop: "10%" }}>
                <p className="title is-2">See the Data</p>
                <p className="subtitle is-5" style={{ paddingTop: "1em" }}>
                	Get real time data on your car and see the trends based on your driving performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*<!-- Testimonials -->*/}
        <section className="section testimonials has-text-centered">
          <div className="container">
            <p className="title is-3">What people are saying...</p>
            <div className="columns">
              <div className="column">
                <div className="card" style={{ height: "400px" }}>
                  <div className="card-image">
                    <figure className="image" style={{ margin: "auto", paddingTop: "1rem", maxWidth: "256px" }}>
                      <img className="is-rounded" src={dom} alt="Insert Dominic's Face Here" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-4">Dom P.</p>
                    <p className="subtitle is-6">"The device was easy to use. Now I can keep track of my car's health!"</p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card" style={{ height: "400px" }}>
                  <div className="card-image">
                    <figure className="image" style={{ margin: "auto", paddingTop: "1rem", maxWidth: "256px" }}>
                      <img className="is-rounded" src={phil} alt="Insert Dominic's Face Here" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-4">Phil R.</p>
                    <p className="subtitle is-6">"This is fantastic! My car is in better shape now. Thanks!"</p>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card" style={{ height: "400px" }}>
                  <div className="card-image">
                    <figure className="image" style={{ margin: "auto", paddingTop: "1rem", maxWidth: "256px" }}>
                      <img className="is-rounded" src={dave} alt="Insert Dominic's Face Here" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-4">Dave B.</p>
                    <p className="subtitle is-6">"I learned to take better care of my car!"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*<!-- Call to Action -->*/}
        <section className="call-to-action has-text-white has-text-centered">
          <div className="overlay"></div>
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-fullwidth" style={{ paddingTop: "1.5rem" }}>
                <h2 className="title is-2 has-text-white">Ready to get started? Sign up now!</h2>
              </div>
            </div>
              <div className="columns is-centered" style={{ marginTop: "1em" }}>
                <div className="column is-half">
                  <form>
                    <div className="field is-grouped">
                      <div className="control is-expanded">
                        <input type="email" className="input is-medium" placeholder="Enter your email..." />
                      </div>
                      <div className="control">
                        <button type="submit" className="button is-medium is-info">Sign up!</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </section>

        {/*<!-- Footer -->*/}
        <footer className="footer">
          <div className="container">
            <div className="columns">
              <div className="column">
                  <p>
                    <a href="/landingpage">About</a>
                    &nbsp;&sdot;&nbsp;
                    <a href="/landingpage">Contact</a>
                    &nbsp;&sdot;&nbsp;
                    <a href="/landingpage">Terms of Use</a>
                    &nbsp;&sdot;&nbsp;
                    <a href="/landingpage">Privacy Policy</a>
                  </p>
                  <p>
                    &copy; Blockchain Car ID &amp; Analytics 2019. All Rights Reserved.
                  </p>
              </div>
              <div className="column">
                <p className="is-pulled-right">
                  <a href="/landingpage">
                    <i className="fab fa-facebook fa-2x fa-fw"></i>
                  </a> &nbsp;
                  <a href="/landingpage">
                    <i className="fab fa-twitter-square fa-2x fa-fw"></i>
                  </a> &nbsp;
                  <a href="/landingpage">
                    <i className="fab fa-instagram fa-2x fa-fw"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
  		</div>
  	);
  }
}

export default FrontPage;