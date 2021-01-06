import React from "react";
import "./styles.css";
import Img from "../../assets/avatarDefault.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={Img} alt="Avatar" />
      <div className="container">
        <h4>
          <b>{props.name}</b>
        </h4>
        <p>{props.email}</p>
      </div>
    </div>
  );
}
