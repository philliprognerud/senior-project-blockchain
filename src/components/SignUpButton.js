import React, { Component } from "react";
import Popup from './Popup';

class SignUpButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSignUpModal: false,
    }
    this.openSignUpModal = this.openSignUpModal.bind(this);
    this.closeSignUpModal = this.closeSignUpModal.bind(this);
  }

  openSignUpModal(){
    this.setState({
      showSignUpModal: true,
    });
  }

  closeSignUpModal(){
    this.setState({
      showSignUpModal: false,
    })
  }


  render(){
    const signUpForm = (
      <div className="modal-dialog" role="document">
        <div className="modal-content form-elegant">
          <div className="modal-header text-center">
            <h3 className="modal-title w-100 dark-grey-text font-weight-bold my-3" style={{ marginLeft: "2rem" }}><strong>Sign Up</strong></h3>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
            onClick={this.closeSignUpModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body mx-4">
            <div className="md-form mb-5 text-center">
              <label data-error="wrong" data-success="right" for="Form-email1">Your Name</label>
              <input type="text" className="form-control validate" style={{ margin: "auto" }} />
            </div>

            <div className="md-form mb-5 text-center">
              <label data-error="wrong" data-success="right" for="Form-email1">Your email</label>
              <input type="email" className="form-control validate" style={{ margin: "auto" }} />
            </div>

            <div className="md-form mb-3 text-center">
              <label data-error="wrong" data-success="right" for="Form-pass1">Your password</label>
              <input type="password" id="Form-pass1" className="form-control validate" style={{ margin: "auto" }} />
            </div>

            <div className="text-center mb-3" style={{ marginTop: "3rem" }}>
              <button type="button" className="btn btn-success btn-block btn-rounded z-depth-1a">Sign Up</button>
            </div>
            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign up
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
        <button className="btn btn-primary my-2 my-sm-0" onClick={this.openSignUpModal}>
          Sign Up
        </button>
        {
          this.state.showSignUpModal ?
            (
              <Popup
                text = {signUpForm}
              />
            )
            :
            null
        }

      </div>
    );
  }
}

export default SignUpButton;
