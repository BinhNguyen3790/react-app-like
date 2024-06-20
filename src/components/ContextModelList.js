import React, { Component } from "react";
import ModelProfile from "./ModelProfile";
import ModelList from "./ModelList";

class ContextModelList extends Component {
  render() {
    return (
      <div className="container m-5">
        <ModelProfile />
        <ModelList />
      </div>
    );
  }
}

export default ContextModelList;
