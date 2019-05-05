import React from "react";
import {
  Alert,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col,
  Table
} from "reactstrap";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PanelHeader, Button, CardCategory } from "components";

var divStyle = {
    progressbar : {
        width : '30%',
        height : '30%',
        float: 'left',
    },
    contentBody : {
        float: 'right',
        width: '50%'
    },
    cardSize : {
        padding: '2%'
    },
    total : {
      float:'right'
    },
    textColor : {
      color: 'red'
    },
    title : {
      width : '100%'
    }
};

class VehicleValue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.notify = this.notify.bind(this);
  }
  onDismiss() {}
  notify(place) {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Now UI Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  }
  render() {
    return (
      <div>
        <div>
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">Vehicle Value</h2>
              <p className="category">
                See how much your car costs.
              </p>
            </div>
          }/>
        </div>
        <div className="content">
          <Row>
            <Col md={6} xs={12}>
              <Card style = {divStyle.cardSize}>
                <CardHeader>
                  <CardTitle tag="h4">Final Vehicle Value</CardTitle>
                </CardHeader>
                <CardBody >
                  <h1 style = {divStyle.title} class="display-3">$6500</h1>
                </CardBody>
              </Card>
            </Col>
            <Col md={6} xs={12}>
              <Card style = {divStyle.cardSize}>
                <CardHeader>
                  <CardTitle tag="h4">Value Calculation</CardTitle>
                </CardHeader>
                <div>
                  <Table responsive>
                    <thead className=" text-primary">
                      <tr>
                        <th>Type</th>
                        <th>Stat</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>New Car Value</td>
                        <td>2019</td>
                        <td>$30000</td>
                      </tr>
                      <tr>
                        <td>Age Value</td>
                        <td>12 years</td>
                        <td style = {divStyle.textColor} >-$12000</td>
                      </tr>
                      <tr>
                        <td>Mileage Value</td>
                        <td>95000</td>
                        <td style = {divStyle.textColor}>-$9000</td>
                      </tr>
                      <tr>
                        <td>Engine Value</td>
                        <td>80%</td>
                        <td style = {divStyle.textColor}>-$300</td>
                      </tr>
                      <tr>
                        <td>BrakePads Value</td>
                        <td>60%</td>
                        <td style = {divStyle.textColor}>-$250</td>
                      </tr>
                      <tr>
                        <td>Transmission</td>
                        <td>80%</td>
                        <td style = {divStyle.textColor}>-$400</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default VehicleValue;
