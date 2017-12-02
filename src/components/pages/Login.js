import React, { Component } from "react";
import {
  CustomerLoginForm,
  CarOwnerLoginForm,
  AttractionOwnerLoginForm
} from "../modules/Forms/LoginForm";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { connect } from "react-redux";
import { login } from "../../actions/actions";

class Login extends Component {
  constructor(props) {
    super(props);

    this.onCustomerClick = this.onCustomerClick.bind(this);
    this.onRentClick = this.onRentClick.bind(this);
    this.onAttractionClick = this.onAttractionClick.bind(this);
    this.onAdminClick = this.onAdminClick.bind(this);
  }

  onCustomerClick(e) {
    e.preventDefault();
    this.props.login("customer");
  }
  onRentClick(e) {
    e.preventDefault();
    this.props.login("rent");
  }
  onAttractionClick(e) {
    e.preventDefault();
    this.props.login("attraction");
  }

  onAdminClick(e) {
    e.preventDefault();
    this.props.login("admin");
  }

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
            <CustomerLoginForm>
              <button
                className="btn deep-purple darken-3 waves-effect waves-light"
                onClick={this.onCustomerClick}
              >
                Login <i class="material-icons right">send</i>
              </button>
            </CustomerLoginForm>
          </TabPanel>
          <TabPanel>
            <CarOwnerLoginForm>
              <button
                className="btn deep-purple darken-3 waves-effect waves-light"
                onClick={this.onRentClick}
              >
                Login <i class="material-icons right">send</i>
              </button>
            </CarOwnerLoginForm>
          </TabPanel>
          <TabPanel>
            <AttractionOwnerLoginForm>
              <button
                className="btn deep-purple darken-3 waves-effect waves-light"
                onClick={this.onAttractionClick}
              >
                Login <i class="material-icons right">send</i>
              </button>
            </AttractionOwnerLoginForm>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}
export default connect(mapStateToProps, { login })(Login);
