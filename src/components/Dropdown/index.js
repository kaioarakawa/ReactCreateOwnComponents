import React, { useState } from "react";
import "./styles.css";

export default function Dropdown(props) {
  const [value, setValue] = useState();

  return (
    <div className="dowpdownItens">
      <label className="custom-select">
        <span>{props.label}</span>
        <select
          className="options"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        >
          {props.options.map((item) => (
            <option key={item.label} value={item.value}>
              {item.value}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
