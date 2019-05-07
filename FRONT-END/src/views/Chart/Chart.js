import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
} from "reactstrap";
// react plugin for creating notifications over the dashboard

import { PanelHeader, Stats, CardCategory, Tasks } from "components";
import { Line, Bar, Pie } from "react-chartjs-2";


import {
  dashboardPanelChart,
  BatteryConsumption,
  TripSpeeds,
  averageSpeed,
  FuelChart,
  CarUsage,
  FuelUsageChart
} from "variables/charts.jsx";

var divStyle = {
    cardSize : {
        width : '95%',
        margin : 'auto',
    },
    rowSize: {
        paddingBottom : '3%'
    }

};

/*import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.css";
import "assets/css/demo.css";*/

class Chart extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)

  };


  render() {
    return (
      <div>
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">{this.props.location.mainTitle}</h2>
              <p className="category">
                {this.props.location.subMainTitle}
              </p>
            </div>
          }
        />
        <div className="content">
          <Row>
            <Col md={12} xs={12}>
              <Card>
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col md={6} className="ml-auto mr-auto text-center">
                        <CardTitle tag="h4">
                          {this.props.location.chartTitle}
                          <p className="category">
                            {this.props.location.chartSubTitle}
                          </p>
                        </CardTitle>
                      </Col>
                    </Row>
                    <Row>
                    <Col xs={12} md={14}>
                      <Card className="card-chart">
                        <CardHeader>
                          <CardCategory>{this.props.title1}</CardCategory>
                          <CardTitle tag="h4">{this.props.title2} </CardTitle>
                        </CardHeader>
                        <CardBody>
                          <div className="chart-area">
                           {this.props.location.chart}
                          </div>
                        </CardBody>
                        <CardFooter>
                          <Stats>
                            {[
                              {
                                i: "now-ui-icons arrows-1_refresh-69",
                                t: "Just Updated"
                              }
                            ]}
                          </Stats>
                        </CardFooter>
                      </Card>
                    </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row style = {divStyle.rowSize}>
            <Card style = {divStyle.cardSize}>
              <CardHeader>
                       <CardTitle tag="h4">Information </CardTitle>
              </CardHeader>
              <CardBody>
                       <p>{this.props.location.info}</p>
              </CardBody>
            </Card>
          </Row>
        </div>
      </div>
    );
  }
}

export default Chart;
