import React, { Component } from "react";
import CustomerForm from "../modules/Forms/CustomerForm";
import CarOwnerForm from "../modules/Forms/CarOwnerForm";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default class Register extends Component {
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
                <h5>Car Rental Owner</h5>
              </Tab>
            </div>
          </TabList>
          <TabPanel>
            <CustomerForm />
          </TabPanel>
          <TabPanel>
            <CarOwnerForm />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
