import React, { useRef } from "react";
import "./styles.css";

export default function Ballon(props) {
  const containerRef = useRef(null);

  function attMouse(e) {
    containerRef.current.style.top = e.clientY + "px";
    containerRef.current.style.left = e.clientX + 20 + "px";
  }

  console.log();
  return (
    <div className="tooltip" onMouseMove={(e) => attMouse(e)}>
      {props.element}
      <span id="tooltip-span" ref={containerRef}>
        {props.text}
      </span>
    </div>
  );
}
