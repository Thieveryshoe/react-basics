import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  // have to use constructor and bind each function is "old style" but safe, also noisy
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // handleIncrement() {
  //   console.log("Incremented", this.state);
  // }

  // this style with lamda function is expirimental, but less noisy.
  handleIncrement = () => {
    console.log("Incremented", this.state);
  };

  render() {
    console.log(this.state.count);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
