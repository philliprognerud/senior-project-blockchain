import React, { Component } from "react";
import "./frontpage.css";
import bgshowcase1 from "../components/images/bg-showcase-1.jpg";
import deviceImg from "../components/images/device.jpg";

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
              <div className="columns">
                <div className="column">
                  <h1 className="title has-text-white">Car ID &amp; Analytics</h1>
                  <h2 class="subtitle has-text-white">Get your car's health history</h2>
                </div>
                <div className="column">
                  <form>
                    <div className="field is-grouped">
                      <div className="control">
                        <input className="input is-medium" type="text" placeholder="Enter VIN" />
                      </div>
                      <div className="control">
                        <button type="submit" className="button is-medium is-info">Get Report</button>
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
                  <h3 className="title is-3">Buyer Friendly</h3>
                  <p className="subtitle is-5">View a complete report of your future car.</p>
                </div>
              </div>
              <div className="column">
                <div className="features-icons-item">
                  <span className="features-icons-icon icon is-large">
                    <i class="fas fa-chart-bar fa-5x" aria-hidden="true"></i>
                  </span>
                  <h3 className="title is-3">History &amp; Analytics</h3>
                  <p className="subtitle is-5">See a detailed history and overall health of your car, down to specific parts.</p>
                </div>
              </div>
              <div className="column">
                <div className="features-icons-item">
                  <span className="features-icons-icon icon is-large">
                    <i class="fas fa-lock fa-5x" aria-hidden="true"></i>
                  </span>
                  <h3 className="title is-3">Secure</h3>
                  <p className="subtitle is-5">Using blockchain techonology, your data is guaranteed tamper free.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*<!-- Image Showcases -->*/}
        <section className="section showcase">
          <div className="container is-fluid">
            <div className="columns is-multiline">
              <div className="column is-half showcase-img">
                <img src={deviceImg} alt=""/>
              </div>
              <div className="column is-half has-text-centered showcase-text"
              	style={{ marginBottom: "0px"}}>
                <h2 className="title is-2">Use our device.</h2>
                <p className="subtitle is-6">
                	Just plug the easy to use device into your vehicle to start tracking.
                </p>
              </div>
              <div className="column is-half has-text-centered showcase-text"
              	style={{ marginBottom: "0px" }}>
                <h2 className="title is-2">View Part Health</h2>
                <p className="subtitle is-6">
                	See the current conditions each part of your vehicle.
                </p>
              </div>
              <div className="column is-half showcase-img">
                <img src={bgshowcase1} alt=""/>
              </div>
              <div className="column is-half showcase-img">
                <img src={bgshowcase1} alt=""/>
              </div>
              <div className="column is-half has-text-centered showcase-text">
                <h2 className="title is-2">Get Notifications</h2>
                <p className="subtitle is-6">
                	We'll send you notifications about how you can improve your car's health;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*<!-- Testimonials -->*/}
        <section className="section testimonials has-text-centered">
          <div className="container">
            <h2 className="title is-5">What people are saying...</h2>
            <div className="columns">
              <div className="column">
                <figure className="image is-128x128" style={{ margin: "auto"}}>
                  <img className="is-rounded" src="" alt="Insert Dominic's Face Here" />
                </figure>
                <h5>Margaret E.</h5>
                <p className="subtitle is-6">"This is fantastic! Thanks so much guys!"</p>
              </div>
              <div className="column">
                <figure className="image is-128x128" style={{ margin: "auto"}}>
                  <img className="is-rounded" src="" alt="Insert Dominic's Face Here" />
                </figure>
                <h5>Fred S.</h5>
                <p className="subtitle is-6">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
              </div>
              <div className="column">
                <figure className="image is-128x128" style={{ margin: "auto"}}>
                  <img className="is-rounded" src="" alt="Insert Dominic's Face Here" />
                </figure>
                <h5>Sarah W.</h5>
                <p className="subtitle is-6">"Thanks so much for making these free resources available to us!"</p>
              </div>
            </div>
          </div>
        </section>

        {/*<!-- Call to Action -->*/}
        <section className="call-to-action has-text-white has-text-centered">
          <div className="overlay"></div>
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12">
                <h2 className="title is-2 has-text-white">Ready to get started? Sign up now!</h2>
              </div>
            </div>
              <div className="columns is-centered is-fullwidth">
                <form>
                  <div className="field is-grouped">
                    <div className="control">
                      <input type="email" className="input is-medium" placeholder="Enter your email..." />
                    </div>
                    <div className="control">
                      <button type="submit" className="button is-medium is-info">Sign up!</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </section>

        {/*<!-- Footer -->*/}
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              Blame Dominic
            </p>
           	<hr/>
            <p>
            	Project repository: <a href="" >GitHub</a>
            </p>
          </div>
        </footer>
  		</div>
  	);
  }
}

export default FrontPage;