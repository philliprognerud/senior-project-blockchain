import React, { Component } from "react";
import Popup from './Popup';

import axios from "axios"

import { withRouter } from 'react-router-dom';

class LoginButton extends Component {
  constructor(props){
    super(props);

  }

  submitData = async () => {
    let res = await axios.post("http://localhost:8081/auth/login", {
      username: this.email.value,
      password: this.password.value
    })

    if(res.data.success){
      this.props.history.push("/dashboard/home/")
    }
  }


  render(){
    const loginForm = (
      <div className="modal-dialog" role="document">
        <div className="modal-content form-elegant">
          <div className="modal-header text-center">
            <h3 className="modal-title w-100 dark-grey-text font-weight-bold my-3" style={{ marginLeft: "2rem" }}><strong>Login</strong></h3>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
            onClick={this.props.toggle}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body mx-4">
            <div className="md-form mb-5 text-center">
              <label data-error="wrong" data-success="right" for="Form-email1">Your email</label>
              <input type="email" className="form-control validate" style={{ margin: "auto" }} ref={node => this.email = node}/>
            </div>

            <div className="md-form mb-3 text-center">
              <label data-error="wrong" data-success="right" for="Form-pass1">Your password</label>
              <input type="password" id="Form-pass1" className="form-control validate" style={{ margin: "auto" }} ref={node => this.password = node}/>
              <p className="font-small blue-text d-flex justify-content-end" style={{ padding: "1rem" }}>Forgot <a href="#" className="blue-text ml-1">
                  Password?</a></p>
            </div>

            <div className="text-center mb-3" style={{ marginTop: "2rem" }}>
              <button type="button" className="btn btn-success btn-block btn-rounded z-depth-1a" onClick={this.submitData}>Login</button>
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
        <button className="btn btn-success my-2 my-sm-0" onClick={this.props.toggle}>
          Login
        </button>
        {
          this.props.modal ?
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

export default withRouter(LoginButton);
