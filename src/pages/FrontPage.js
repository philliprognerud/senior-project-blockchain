import React, { Component } from "react";
import "./frontpage.css";
import bgshowcase1 from "../components/images/bg-showcase-1.jpg";

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
                  <h1 className="title has-text-white">Car ID & Analytics</h1>
                  <h2 class="subtitle has-text-white">Get your car's health history</h2>
                </div>
                <div className="column">
                  <form>
                    <div className="field is-grouped">
                      <div className="control">
                        <input className="input" type="text" placeholder="Enter VIN" />
                      </div>
                      <div className="control">
                        <button type="submit" className="button is-info">Get Report</button>
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
            <div className="columns">
              <div className="column">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-screen-desktop m-auto text-primary"></i>
                  </div>
                  <h3 className="title is-3">Fully Responsive</h3>
                  <p className="subtitle is-5">This theme will look great on any device, no matter the size!</p>
                </div>
              </div>
              <div className="column">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-layers m-auto text-primary"></i>
                  </div>
                  <h3 className="title is-3">Bootstrap 4 Ready</h3>
                  <p className="subtitle is-5">Featuring the latest build of the new Bootstrap 4 framework!</p>
                </div>
              </div>
              <div className="column">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check m-auto text-primary"></i>
                  </div>
                  <h3 className="title is-3">Easy to Use</h3>
                  <p className="subtitle is-5">Ready to use with your own content, or customize the source files!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*<!-- Image Showcases -->*/}
        <section className="section showcase">
          <div className="container is-fluid">
            <div className="columns">

              <div className="column is-half showcase-img">
                <img src={bgshowcase1} alt=""/>
              </div>
              <div className="column has-text-centered notification showcase-text">
                <h2 className="title is-2">Fully Responsive Design</h2>
                <p className="subtitle is-6">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
              </div>
            </div>
            <div className="columns">
              <div className="column has-text-centered notification showcase-text">
                <h2 className="title is-2">Updated For Bootstrap 4</h2>
                <p className="subtitle is-6">Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>
              </div>
              <div className="column is-half showcase-img">
                <img src={bgshowcase1} alt=""/>
              </div>
            </div>
            <div className="columns">
              <div className="column is-half showcase-img">
                <img src={bgshowcase1} alt=""/>
              </div>
              <div className="column has-text-centered notification showcase-text">
                <h2 className="title is-2">Easy to Use &amp; Customize</h2>
                <p className="subtitle is-6">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
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
          </div>
        </footer>
  		</div>
  	);
  }
}

export default FrontPage;