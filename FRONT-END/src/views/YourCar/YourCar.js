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
    }
};

class YourCar extends React.Component {
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
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">All About Your Car</h2>
              <p className="category">
                See how your car is right now.
              </p>
            </div>
          }
        />
        <div className="content">
          <Row>
            <Col md={6} xs={12}>
              <Card style = {divStyle.cardSize}>
                <CardHeader>
                  <CardTitle tag="h4">BrakePads</CardTitle>
                </CardHeader>
                <CardBody>
                <div style = {divStyle.progressbar}>
                  <CircularProgressbar
                   percentage={45}
                   text={`${45}%`} />
                </div>
                <div style = {divStyle.contentBody}>
                 <strong>Bad</strong> <br/>
                 Suggestions: Check your Brake Fluid levels. <br/>
                 Avoid Heavy and Unnecssary Braking <br/>
                </div>
                </CardBody>
              </Card>
            </Col>
            <Col md={6} xs={12}>
              <Card style = {divStyle.cardSize}>
                <CardHeader>
                  <CardTitle tag="h4">Engine</CardTitle>
                </CardHeader>
                <CardBody>
                <div style = {divStyle.progressbar}>
                  <CircularProgressbar
                   percentage={81}
                   text={`${81}%`} />
                </div>
                <div style = {divStyle.contentBody}>
                 <strong>Good</strong> <br/>
                 Suggestions: Check the oil levels. <br/>
                </div>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card style = {divStyle.cardSize}>
                <CardHeader>
                  <CardTitle tag="h4">Transmission</CardTitle>
                </CardHeader>
                <CardBody>
                <div style = {divStyle.progressbar}>
                  <CircularProgressbar
                   percentage={22}
                   text={`${22}%`} />
                 </div>
                <div style = {divStyle.contentBody}>
                 <strong>Bad</strong> <br/>
                 Suggestions: Check transmission fluid <br/>
                 Check Gearshift irregularities <br/>
                </div>
                </CardBody>
              </Card>
              <Col xs={22} md={14}>
                <Card >
                    <CardHeader>
                        <CardTitle tag="h4">2007 RAV4</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <img src='https://media.ed.edmunds-media.com/toyota/rav4/2007/oem/2007_toyota_rav4_4dr-suv_base_fq_oem_2_500.jpg' />
                    </CardBody>
                     
                </Card>
            </Col>
            </Col>
            <Col xs={12} md={6}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Utility Condition</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className=" text-primary">
                      <tr>
                        <th>Type</th>
                        <th>Condition</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Battery</td>
                        <td>Ok</td>
                      </tr>
                      <tr>
                        <td>Sound System</td>
                        <td>Ok</td>
                      </tr>
                      <tr>
                        <td>TV System</td>
                        <td>Ok</td>
                      </tr>
                      <tr>
                        <td>Tires</td>
                        <td>Ok</td>
                      </tr>
                      <tr>
                        <td>Windows</td>
                        <td>Ok</td>
                      </tr>
                      <tr>
                        <td>Bluetooth</td>
                        <td>ok</td>
                      </tr>
                      <tr>
                        <td>Windshield Wipers</td>
                        <td>ok</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
              
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default YourCar;
