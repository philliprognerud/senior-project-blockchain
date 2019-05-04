import React from "react";
import {
  Alert,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col
} from "reactstrap";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

import { PanelHeader, Button } from "components";

class Notifications extends React.Component {
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
              <h2 className="title">All-Time Car History</h2>
              <p className="category">
                You can view the entire history of your car
              </p>
            </div>
          }
        />
        <div className="content">
          <Row>
            <Col md={6} xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Total Miles Driven</CardTitle>
                </CardHeader>
                <CardBody>
                  Total miles driven every year
                </CardBody>
              </Card>
            </Col>
            <Col md={6} xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Average Miles Per Hour</CardTitle>
                </CardHeader>
                <CardBody>
                  Average miles per hour over the lifespan of the car by year
                </CardBody>
              </Card>
            </Col>
            <Col md={12} xs={12}>
              <Card>
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col md={6} className="ml-auto mr-auto text-center">
                        <CardTitle tag="h4">
                          Notifications Places
                          <p className="category">
                            Click to view notifications
                          </p>
                        </CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={8} xs={12} className="ml-auto mr-auto">
                        <Row>
                          <Col md={4} xs={12}>
                            <Button
                              color="primary"
                              block
                              onClick={() => this.notify("tl")}
                            >
                              Top Left
                            </Button>
                          </Col>
                          <Col md={4} xs={12}>
                            <Button
                              color="primary"
                              block
                              onClick={() => this.notify("tc")}
                            >
                              Top Center
                            </Button>
                          </Col>
                          <Col md={4} xs={12}>
                            <Button
                              color="primary"
                              block
                              onClick={() => this.notify("tr")}
                            >
                              Top Right
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={8} xs={12} className="ml-auto mr-auto">
                        <Row>
                          <Col md={4} xs={12}>
                            <Button
                              color="primary"
                              block
                              onClick={() => this.notify("bl")}
                            >
                              Bottom Left
                            </Button>
                          </Col>
                          <Col md={4} xs={12}>
                            <Button
                              color="primary"
                              block
                              onClick={() => this.notify("bc")}
                            >
                              Bottom Center
                            </Button>
                          </Col>
                          <Col md={4} xs={12}>
                            <Button
                              color="primary"
                              block
                              onClick={() => this.notify("br")}
                            >
                              Bottom Right
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
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

export default Notifications;
