import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

import { PanelHeader, FormInputs, CardAuthor, CardSocials } from "components";

import Bg from "../../assets/img/bg8.jpg"
import Me from "./me.png"

class User extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={8} xs={12}>
              <Card style={{height:"100%"}}>
                <CardHeader>
                  <h5 className="title">Edit Profile</h5>
                </CardHeader>
                <CardBody>
                  <form>
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "Email address",
                          inputProps: {
                            type: "email",
                            placeholder: "philliprognerud@gmail.com"
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                      proprieties={[
                        {
                          label: "First Name",
                          inputProps: {
                            type: "text",
                            placeholder: "First Name",
                            defaultValue: "Phillip"
                          }
                        },
                        {
                          label: "Last Name",
                          inputProps: {
                            type: "text",
                            placeholder: "Last Name",
                            defaultValue: "Rognerud"
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "Address",
                          inputProps: {
                            type: "text",
                            placeholder: "Home Address",
                            defaultValue:
                              "1310 Tuolumne Rd"
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={[
                        "col-md-4 pr-1",
                        "col-md-4 px-1",
                        "col-md-4 pl-1"
                      ]}
                      proprieties={[
                        {
                          label: "City",
                          inputProps: {
                            type: "text",
                            defaultValue: "Millbrae",
                            placeholder: "Millbrae"
                          }
                        },
                        {
                          label: "Country",
                          inputProps: {
                            type: "text",
                            defaultValue: "USA",
                            placeholder: "USA"
                          }
                        },
                        {
                          label: "Postal Code",
                          inputProps: {
                            type: "number",
                            placeholder: "94030"
                          }
                        }
                      ]}
                    />
                  </form>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} xs={12}>
              <Card className="card-user" style={{height:"100%"}}>
                <div className="image">
                  <img src={Bg} alt="..." />
                </div>
                <CardBody>
                  <CardAuthor
                    avatar={Me}
                    avatarAlt="..."
                    title="Phillip Rognerud"
                    description="p.rognerud"
                  />
                </CardBody>
                <hr />
                <CardSocials
                  size="lg"
                  socials={[
                    {
                      icon: "fab fa-facebook-f",
                      href: "https://www.facebook.com/"
                    },
                    {
                      icon: "fab fa-twitter",
                      href: "https://www.facebook.com/"
                    },
                    {
                      icon: "fab fa-google-plus-g",
                      href: "https://plus.google.com/discover"
                    }
                  ]}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default User;
