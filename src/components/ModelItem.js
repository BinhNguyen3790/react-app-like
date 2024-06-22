import React, { Component } from "react";

class ModelItem extends Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src="./assets/img/model1.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Tên: Tào Tháo</h5>
          <p className="card-text">Tuổi: 65</p>
          <button className="card-text" style={{ background: "none", border: "1px solid red", borderRadius: "5px", color: "red" }}>
            Thích: 8 <i className="fa fa-heart" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default ModelItem;
