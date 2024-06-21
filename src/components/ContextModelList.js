import React, { Component } from "react";
import ModelProfile from "./ModelProfile";
import ModelList from "./ModelList";

class ContextModelList extends Component {
  render() {
    return (
      <ModelList.Provider>
        <div className="container m-5">
          <ModelProfile />
          <ModelList />
        </div>
      </ModelList.Provider>
    );
  }
}

export default ContextModelList;
