import React from "react";
import { Link } from 'react-router-dom';
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
// react plugin used to create charts
import { Line, Bar, Pie } from "react-chartjs-2";

// function that returns a color based on an interval of numbers

import { PanelHeader, Stats, CardCategory, Tasks } from "components";

import {
  dashboardPanelChart,
  BatteryConsumption,
  TripSpeeds,
  averageSpeed,
  FuelChart,
  CarUsage,
  FuelUsageChart
} from "variables/charts.jsx";

import { tasks } from "variables/general.jsx";


class Dashboard extends React.Component {
  constructor(props) {
   super(props);
   console.log(BatteryConsumption);

  }
  render() {
    return (
      <div>
        <PanelHeader
          size="lg"
          content={
            <Line
              data={dashboardPanelChart.data}
              options={dashboardPanelChart.options}
            />
          }
        />
        <div className="content">
          <Row>
            <Col xs={12} md={4}>
              <Link to={{ pathname: '/chart', battery :   <Pie
                      data={BatteryConsumption.data}
                      options={BatteryConsumption.options}
                    />,
              }}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Wattage(4840W)</CardCategory>
                  <CardTitle tag="h4">Battery Consumption</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-simple btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Pie
                      data={BatteryConsumption.data}
                      options={BatteryConsumption.options}
                    />
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
              </Link>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Trip Distance(Miles)</CardCategory>
                  <CardTitle tag="h4">Odometer </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={TripSpeeds.data}
                      options={TripSpeeds.options}
                    />
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
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Average Speed(MPH)</CardCategory>
                  <CardTitle tag="h4">Trip Speeds</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={averageSpeed.data}
                      options={averageSpeed.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <Stats>
                    {[{ i: "now-ui-icons ui-2_time-alarm", t: "Last 12 days" }]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Fuel Costs($)</CardCategory>
                  <CardTitle tag="h4">Monthly Fuel Costs</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-simple btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={FuelChart.data}
                      options={FuelChart.options}
                    />
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
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Fuel Consumed(Gallons)</CardCategory>
                  <CardTitle tag="h4"> Fuel Used Monthly</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-simple btn-icon"
                      color="default">
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={FuelUsageChart.data}
                      options={FuelUsageChart.options}
                    />
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
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory> Feburary </CardCategory>
                  <CardTitle tag="h4">Car Usage</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-simple btn-icon"
                      color="default">
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Pie
                      data={CarUsage.data}
                      options={CarUsage.options}
                    />
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
      </div>
    );
  }
}

export default Dashboard;
