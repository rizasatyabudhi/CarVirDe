import React, { Component } from "react";

export default class ReduxInput extends Component {
  render() {
    return (
      <div>
        <input type="text" {...this.props.input} />
      </div>
    );
  }
}
