import React from "react";

class Input extends React.Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          value={this.props.value}
          onChange={this.props.event}
          type={this.props.type}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default Input;
