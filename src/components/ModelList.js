import React, { Component } from "react";
import ModelItem from "./ModelItem";

class ModelList extends Component {
  render() {
    return (
      <div>
        <h2>Danh Sách Idol:</h2>
        <div class="row">
          <div className="col-3">
            <ModelItem />
          </div>
          <div className="col-3">
            <ModelItem />
          </div>
          <div className="col-3">
            <ModelItem />
          </div>
          <div className="col-3">
            <ModelItem />
          </div>
        </div>
      </div>
    );
  }
}

export default ModelList;
