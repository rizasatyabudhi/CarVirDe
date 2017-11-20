import React, { Component } from "react";
import {
  CustomerLoginForm,
  CarOwnerLoginForm,
  AttractionOwnerLoginForm
} from "../modules/Forms/LoginForm";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <Tabs>
          <TabList>
            <div className="center-align">
              <Tab style={{ display: "inline-block" }}>
                <h5>Customer</h5>
              </Tab>
              <Tab style={{ display: "inline-block", marginLeft: "3em" }}>
                <h5>Pemilik Rental</h5>
              </Tab>
              <Tab style={{ display: "inline-block", marginLeft: "3em" }}>
                <h5>Pemilik Tempat Wisata</h5>
              </Tab>
            </div>
          </TabList>
          <TabPanel>
            <CustomerLoginForm />
          </TabPanel>
          <TabPanel>
            <CarOwnerLoginForm />
          </TabPanel>
          <TabPanel>
            <AttractionOwnerLoginForm />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
