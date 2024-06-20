import React, { Component } from "react";

class ModelProfile extends Component {
  render() {
    return (
      <div>
        <h2>Thông Tin Idol:</h2>
        <div className="card" style={{ width: "18rem" }}>
          <img src="./assets/img/model1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Tên: Tào Tháo</h5>
            <p className="card-text">Tuổi: 65</p>
            <p className="card-text" style={{ color: "red" }}>
              Thích: 8 <i class="fa fa-heart" aria-hidden="true"></i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ModelProfile;
