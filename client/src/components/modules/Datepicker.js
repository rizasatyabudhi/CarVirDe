import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

export class datepickerTimesheet extends Component {
  static defaultProps() {
    placeholder: "";
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.props.input.onChange(moment(date).format("YYYY-MM-DD"));
    // this.props.input.onChange(moment(date).format(`DD-${MMM.toUpperCase()}-YY`))
  }

  render() {
    const { input, placeholder, meta: { touched, error } } = this.props;

    return (
      <div style={this.props.style}>
        {this.props.inputName ? (
          <h2 className="input-name">{this.props.inputName}</h2>
        ) : null}
        {this.props.inputDesc ? (
          <h2 className="input-desc">{this.props.inputDesc}</h2>
        ) : null}
        <DatePicker
          {...input}
          placeholder={placeholder}
          dateFormat="YYYY-MM-DD"
          // selected={input.value ? moment(input.value, `DD-MMM${.toUpperCase()}-YY`) : null}
          selected={input.value ? moment(input.value, "YYYY-MM-DD") : null}
          onChange={this.handleChange}
          minDate={moment().subtract(2, "month")}
          maxDate={moment()}
        >
          {this.props.children}
        </DatePicker>
      </div>
    );
  }
}
