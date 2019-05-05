import React, { Component } from "react";
import Popup from './Popup';

import axios from "axios"

class SignUpButton extends Component {
  constructor(props){
    super(props);
  }


  submitData = async () => {
    let res = await axios.post("http://localhost:8081/auth/signup", {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value
    })

    if(res.data.accountCreated){
      this.props.toggle();
      setTimeout(() => {
        this.props.toggleLogin();
      }, 500);
    }
  }

  google = async () => {
    window.location = "http://localhost:8081/auth/google"
  }


  render(){
    const signUpForm = (
      <div className="modal-dialog" role="document">
        <div className="modal-content form-elegant">
          <div className="modal-header text-center">
            <h3 className="modal-title w-100 dark-grey-text font-weight-bold my-3" style={{ marginLeft: "2rem" }}><strong>Sign Up</strong></h3>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
            onClick={this.props.toggle}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body mx-4">
            <div className="md-form mb-5 text-center">
              <label data-error="wrong" data-success="right" for="Form-email1">Your Name</label>
              <input type="text" className="form-control validate" style={{ margin: "auto" }} ref={node => this.name = node}/>
            </div>

            <div className="md-form mb-5 text-center">
              <label data-error="wrong" data-success="right" for="Form-email1">Your email</label>
              <input type="email" className="form-control validate" style={{ margin: "auto" }} ref={node => this.email = node}/>
            </div>

            <div className="md-form mb-3 text-center">
              <label data-error="wrong" data-success="right" for="Form-pass1">Your password</label>
              <input type="password" id="Form-pass1" className="form-control validate" style={{ margin: "auto" }} ref={node => this.password = node} />
            </div>

            <div className="text-center mb-3" style={{ marginTop: "3rem" }}>
              <button type="button" className="btn btn-success btn-block btn-rounded z-depth-1a" onClick={this.submitData}>Sign Up</button>
            </div>
            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign up
              with:</p>

            <div className="row my-3 d-flex justify-content-center">
              <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fab fa-facebook-f text-center"></i></button>
              <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fab fa-twitter"></i></button>
              <button type="button" className="btn btn-white btn-rounded z-depth-1a" onClick={this.google}><i className="fab fa-google-plus-g"></i></button>
            </div>
          </div>
        </div>
      </div>
    )

    return(
      <div>
        <button className="btn btn-primary my-2 my-sm-0" onClick={this.props.toggle}>
          Sign Up
        </button>
        {
          this.props.modal ?
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
