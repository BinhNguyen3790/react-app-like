import React, { Component } from "react";

class ModalListProvider extends Component {
  state = {
    modelList: [
      { id: 1, name: "Tào Tháo", age: 65, img: "./assets/img/model1.png", like: 0, active: true },
      { id: 1, name: "Gia Các Lượng", age: 54, img: "./assets/img/model2.png", like: 0, active: false },
      { id: 1, name: "Joker", age: 35, img: "./assets/img/model3.png", like: 0, active: false },
      { id: 1, name: "Donnal Trumb", age: 18, img: "./assets/img/model4.png", like: 0, active: false },
    ],
  };
  render() {
    return (
      <ModalListProvider.Provider value={{ modelList: this.state.modelList }}>
        <div>{this.props.children}</div>
      </ModalListProvider.Provider>
    );
  }
}

export default ModalListProvider;
