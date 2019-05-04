import React, { Component } from "react";
import "./landingpage.css";
import deviceImg from "../components/images/device.jpg";
import car from "../components/images/car1.jpg";
import data from "../components/images/data.jpg"
import dom from "../components/images/dom.jpg";
import phil from "../components/images/phil.jpg";
import dave from "../components/images/dave.jpg";
import SignUpButton from "../components/SignUpButton";
import LoginButton from "../components/LoginButton";
import "bootstrap/dist/css/bootstrap.css";
const home = "/landing";

class LandingPage extends Component {
	constructor(props) {
    super(props);
  }

  render() {
  	return (
  		<div>
        {/*<!-- Navigation -->*/}
        <nav class="navbar navbar-expand-md navbar-light bg-light">
          <div className="container">
              <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                  <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                          <a className="navbar-brand" href={home}>Car ID & Analytics</a>
                      </li>
                  </ul>
              </div>
              <div class="mx-auto order-0">  
              </div>
              <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                  <ul class="navbar-nav ml-auto">
                      <li class="nav-item" style={{ marginRight: "1rem"}}>
                          <SignUpButton />
                      </li>
                      <li class="nav-item">
                          <LoginButton />
                      </li>
                  </ul>
              </div>
            </div>
        </nav>

        {/*<!-- Masthead -->*/}
        <header className="masthead text-white text-center">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="mb-5" style={{ textShadow: "0 2px 8px rgba(0,0,0,2)"}}>
                  Car ID &amp; Analytics
                </h1>
                <h3 className="mb-5" style={{ textShadow: "0 2px 8px rgba(0,0,0,2)"}}>
                  Get your car's health history
                </h3>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form onSubmit={(e) => { e.preventDefault() }}>
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input type="email" className="form-control form-control-lg" placeholder="Enter VIN" />
                    </div>
                    <div className="col-12 col-md-3">
                      <button type="submit" className="btn btn-block btn-lg btn-primary">Get Report</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>

        {/*<!-- Icons Grid -->*/}
        <section className="features-icons bg-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="fas fa-car fa-5x" aria-hidden="true" style={{ margin: "auto" }}></i>
                  </div>
                  <h3 style={{ paddingTop: "0.5em" }}>Buyer Friendly</h3>
                  <p className="lead mb-0" style={{ paddingTop: "1em" }}>
                    View a complete report of your future car.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="fas fa-chart-bar fa-5x" aria-hidden="true" style={{ margin: "auto" }}></i>
                  </div>
                  <h3 style={{ paddingTop: "0.5em" }}>History &amp; Analytics</h3>
                  <p className="lead mb-0" style={{ paddingTop: "1em" }}>
                    See a detailed history and overall health of your car, down to specific parts.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="fas fa-lock fa-5x" aria-hidden="true" style={{ margin: "auto" }}></i>
                  </div>
                  <h3 style={{ paddingTop: "0.5em" }}>Secure</h3>
                  <p className="lead mb-0" style={{ paddingTop: "1em" }}>
                    Using blockchain techonology, your data is guaranteed tamper free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*<!-- Image Showcases -->*/}
        <section className="showcase">
          <div className="container-fluid" style={{ padding: "0 4.5rem"}}>
            <div className="row no-gutters">
              <div className="col-lg-6 order-lg-2 text-white showcase-img">
                <img style={{ maxWidth: "875px" }} src={deviceImg} alt="Device"/>
              </div>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text text-center">
                <h2>Use our device.</h2>
                <p className="lead mb-0">
                  Just plug the easy to use device into your vehicle to start tracking.
                </p>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6 text-white showcase-img">
                <img src={car} alt="Car" style={{ margin: "5px 5px 5px", maxWidth: "875px" }}/>
              </div>
              <div className="col-lg-6 my-auto showcase-text  text-center">
                <h2>View Part Health</h2>
                <p className="lead mb-0">
                  See the current conditions each part of your vehicle.
                </p>
              </div>
            </div>
            <div className="row no-gutters" style={{ marginBottom: "6px" }}>
              <div className="col-lg-6 order-lg-2 text-white showcase-img">
                <img style={{ maxWidth: "875px" }} src={data} alt="Data"/>
              </div>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text text-center">
                <h2>See the Data</h2>
                <p className="lead mb-0">
                  Get real time data on your car and see the trends based on your driving performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*<!-- Testimonials -->*/}
        <section className="testimonials text-center bg-light">
          <div className="container">
            <h2 className="mb-5">What people are saying...</h2>
            <div className="row">
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <div class="card" style={{ height: "400px" }}>
                    <img className="img-fluid rounded-circle mb-3" src={dom} alt="Insert Dominic Here" style={{ margin: "auto", paddingTop: "1em"}}/>
                    <div class="card-body">
                      <h5 style={{ paddingTop: "0.5rem" }}>Dom P.</h5>
                      <p className="font-weight-light mb-0">"The device was easy to use. Now I can keep track of my car's health!"</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <div class="card" style={{ height: "400px" }}>
                    <img className="img-fluid rounded-circle mb-3" src={phil} alt="Insert Dominic Here" style={{ margin: "auto", paddingTop: "1em"}}/>
                    <div class="card-body">
                      <h5 style={{ paddingTop: "0.5rem" }}>Phil R.</h5>
                      <p className="font-weight-light mb-0">"This is fantastic! My car is in better shape now. Thanks!"</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <div class="card" style={{ height: "400px" }}>
                    <img className="img-fluid rounded-circle mb-3" src={dave} alt="Insert Dominic Here" style={{ margin: "auto", paddingTop: "1em"}}/>
                    <div class="card-body">
                      <h5 style={{ paddingTop: "0.5rem" }}>Dave B.</h5>
                      <p className="font-weight-light mb-0">"I learned to take better care of my car!"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*<!-- Call to Action -->*/}
        <section className="call-to-action text-white text-center">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h2 className="mb-4" style={{ textShadow: "0 2px 8px rgba(0,0,0,2)"}}>
                Ready to get started? Sign up now!</h2>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input type="email" className="form-control form-control-lg" placeholder="Enter your email..." />
                    </div>
                    <div className="col-12 col-md-3">
                      <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/*<!-- Footer -->*/}
        <footer className="footer bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                <ul className="list-inline mb-2">
                  <li className="list-inline-item">
                    <a href={home}>About</a>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <a href={home}>Contact</a>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <a href={home}>Terms of Use</a>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <a href={home}>Privacy Policy</a>
                  </li>
                </ul>
                <p className="text-muted small mb-4 mb-lg-0">&copy; Blockchain Car ID &amp; Analytics 2019. All Rights Reserved.</p>
              </div>
              <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mr-3">
                    <a href={home}>
                      <i className="fab fa-facebook fa-2x fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mr-3">
                    <a href={home}>
                      <i className="fab fa-twitter-square fa-2x fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href={home}>
                      <i className="fab fa-instagram fa-2x fa-fw"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
  		</div>
  	);
  }
}

export default LandingPage;