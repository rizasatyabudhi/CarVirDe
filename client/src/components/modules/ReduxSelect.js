import React, { Component } from "react";
export class ReduxSelect extends Component {
  constructor() {
    super();
    this.state = {
      error: null
    };
  }
  render() {
    return (
      <select
        {...this.props.select}
        {...this.props.custom}
        {...this.props.input}
        placeholder={this.props.placeholder}
      >
        {this.props.children}
      </select>
    );
  }
}
