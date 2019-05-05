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

import Map from "../Maps/Maps.jsx"

import { PanelHeader, Stats, CardCategory, Tasks } from "components";

import {
  dashboardPanelChart,
  BatteryConsumption,
  TripDistance,
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
              <Link to={{ pathname: '/chart', chart :   <Pie
                data={CarUsage.data}
                options={CarUsage.options}/>, mainTitle : 'Fuel Usage',
                subMainTitle : 'See how you are using your car',
                chartTitle : 'Pie Chart', chartSubTitle: 'Time'
              }}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory> Car State </CardCategory>
                  <CardTitle tag="h4">Car Usage</CardTitle>
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
              </Link>
            </Col>
            <Col xs={12} md={4}>
              <Link to={{ pathname: '/chart', chart :   <Line
                data={TripDistance.data}
                options={TripDistance.options}/>,mainTitle : 'Odometer',
                subMainTitle : 'See your Trip distance',
                chartTitle : 'Line Graph', chartSubTitle: 'Miles'
              }}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Trip Distance(Miles)</CardCategory>
                  <CardTitle tag="h4">Odometer </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={TripDistance.data}
                      options={TripDistance.options}
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
              <Link to={{ pathname: '/chart', chart :   <Bar
                data={averageSpeed.data}
                options={averageSpeed.options}/>,
              }}>
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
            </Link>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <Link to={{ pathname: '/chart', chart :   <Line
                data={FuelChart.data}
                options={FuelChart.options}/>, mainTitle : 'Fuel Cost',
                subMainTitle : 'See how much Fuel you spent',
                chartTitle : 'Line', chartSubTitle: 'USD'
              }}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Fuel Costs($)</CardCategory>
                  <CardTitle tag="h4">Monthly Fuel Costs</CardTitle>
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
              </Link>
            </Col>
            <Col xs={12} md={4}>
              <Link to={{ pathname: '/chart', chart :   <Bar
                data={FuelUsageChart.data}
                options={FuelUsageChart.options}/>,mainTitle : 'Fuel Consumed',
                subMainTitle : 'See how much fuel you have used',
                chartTitle : 'Bar Graph', chartSubTitle: 'Gallons'
              }}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Fuel Consumed(Gallons)</CardCategory>
                  <CardTitle tag="h4"> Fuel Used Monthly</CardTitle>
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
              </Link>
            </Col>
            <Col xs={12} md={4}>
              <Link to={{ pathname: '/chart', chart :   <Pie
                      data={BatteryConsumption.data}
                      options={BatteryConsumption.options}
                    />, mainTitle : 'Battery Usage', subMainTitle : 'See your Battery performance',
                    chartTitle : 'Pie Chart', chartSubTitle: 'Watts'
              }}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Wattage('4840W')</CardCategory>
                  <CardTitle tag="h4">Battery Consumption</CardTitle>
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
          </Row>
          <Map/>
        </div>
      </div>
    );
  }
}

export default Dashboard;
