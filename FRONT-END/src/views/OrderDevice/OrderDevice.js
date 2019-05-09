import React from "react";
import {
  Alert,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col,
  Table, Button, Form, FormGroup, Label, Input, FormText
} from "reactstrap";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
import {
  TotalMilesDriven,
  AverageMilesDriveLifeTime
} from "variables/charts.jsx";

import { PanelHeader } from "components";
import { Line, Bar, Pie } from "react-chartjs-2";
import deviceImg from "../../components/images/device.jpg";

import axios from "axios"

class OrderDevice extends React.Component {
  state = {
    orderSuccess: false
  }

  componentDidMount(){
    if(window.location.href.includes("success")){
      this.setState({orderSuccess: true})
    }
  }

  paypal = async (e) => {
    e.preventDefault();

    let res = await axios.post("http://localhost:8081/auth/checkout", {});

    window.location = res.data
  }

  render(){

    return(
      <div>
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">Analytics Device</h2>
              <p className="category">
                In order to gather information about you and your car you need to attach our device to your car.
              </p>
            </div>
          }
        />
        <div className="content">
          <Row>
            <Col md={8}>
              <Card style={{height:"100%"}}>
                <CardHeader>
                  <CardTitle tag="h4">Order Your Car Device</CardTitle>
                </CardHeader>
                <CardBody>
                  {this.state.orderSuccess ? (
                    <div style={{fontSize:"16px",textAlign: "center", marginTop:"15%",color:"grey"}}>Your order is on its way!</div>
                  ) : (
                    <Form>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="exampleCity">First Name</Label>
                            <Input type="text" name="city" id="exampleCity"/>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="exampleState">Last Name</Label>
                            <Input type="text" name="state" id="exampleState"/>
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup>
                            <Label for="exampleZip">Middle Initial</Label>
                            <Input type="text" name="zip" id="exampleZip"/>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <Label for="exampleAddress">Address</Label>
                        <Input type="text" name="address" id="exampleAddress"/>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleAddress2">Address 2</Label>
                        <Input type="text" name="address2" id="exampleAddress2"/>
                      </FormGroup>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="exampleCity">City</Label>
                            <Input type="text" name="city" id="exampleCity"/>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label for="exampleState">State</Label>
                            <Input type="text" name="state" id="exampleState"/>
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup>
                            <Label for="exampleZip">Zip</Label>
                            <Input type="text" name="zip" id="exampleZip"/>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button color="primary" style={{background: "#007bff"}} onClick={this.paypal}>Check Out</Button>
                    </Form>
                  )}
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{height:"100%"}}>
                <CardHeader>
                  <CardTitle tag="h4">Our Technology</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="showcase-img">
                    <img src={deviceImg} alt="Device"/>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default OrderDevice;
