import React, { Component } from "react";
import CustomerForm from "../modules/CustomerForm";
import CarOwnerForm from "../modules/CarOwnerForm";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default class Register extends Component {
  render() {
    return (
      <div>
        <Tabs>
          <TabList>
            <div className="center-align">
              <Tab>
                <h5>Customer</h5>
              </Tab>
              <Tab>
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
