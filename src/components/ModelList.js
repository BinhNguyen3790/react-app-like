import React, { Component } from "react";
import ModelItem from "./ModelItem";
import { ModalListContext } from "../context/ModalListContext";

class ModelList extends Component {
  render() {
    return (
      <ModalListContext.Consumer>
        {(value) => {
          return (
            <div>
              <h2>Danh Sách Idol:</h2>
              <div className="row">
                {value.ModelList.map((model, index) => {
                  return (
                    <div className="col-3" key={index}>
                      <ModelItem modelItem={model} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }}
      </ModalListContext.Consumer>
    );
  }
}

export default ModelList;
