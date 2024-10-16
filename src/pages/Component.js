import React, { Component } from "react";

class Pill extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <a
        href="#"
        className="flex items-start px-3 py-1 rounded-full bg-white decoration-black hover:bg-gray-200 duration-500"
      >
        {this.props.text}
      </a>
    );
  }
}

export default Pill;
