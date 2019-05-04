import React, { Component } from "react";
import Popup from './Popup';

class LoginButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      showLoginModal: false,
    }
    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
  }

  openLoginModal(){
    this.setState({
      showLoginModal: true,
    });
  }

  closeLoginModal(){
    this.setState({
      showLoginModal: false,
    })
  }


  render(){
    const loginForm = (
      <div className="modal-dialog" role="document">
        <div className="modal-content form-elegant">
          <div className="modal-header text-center">
            <h3 className="modal-title w-100 dark-grey-text font-weight-bold my-3" style={{ marginLeft: "2rem" }}><strong>Login</strong></h3>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
            onClick={this.closeLoginModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body mx-4">
            <div className="md-form mb-5 text-center">
              <label data-error="wrong" data-success="right" for="Form-email1">Your email</label>
              <input type="email" className="form-control validate" style={{ margin: "auto" }} />
            </div>

            <div className="md-form mb-3 text-center">
              <label data-error="wrong" data-success="right" for="Form-pass1">Your password</label>
              <input type="password" id="Form-pass1" className="form-control validate" style={{ margin: "auto" }} />
              <p className="font-small blue-text d-flex justify-content-end" style={{ padding: "1rem" }}>Forgot <a href="#" className="blue-text ml-1">
                  Password?</a></p>
            </div>

            <div className="text-center mb-3" style={{ marginTop: "2rem" }}>
              <button type="button" className="btn btn-success btn-block btn-rounded z-depth-1a">Login</button>
            </div>
            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or login
              with:</p>

            <div className="row my-3 d-flex justify-content-center">
              <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fab fa-facebook-f text-center"></i></button>
              <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fab fa-twitter"></i></button>
              <button type="button" className="btn btn-white btn-rounded z-depth-1a"><i className="fab fa-google-plus-g"></i></button>
            </div>
          </div>
        </div>
      </div>
    )
    
    return(
      <div>
        <button className="btn btn-success my-2 my-sm-0" onClick={this.openLoginModal}>
          Login
        </button>
        {
          this.state.showLoginModal ?
            (
              <Popup
                text = {loginForm}
              />
            )
            :
            null
        }

      </div>
    );
  }
}

export default LoginButton;
