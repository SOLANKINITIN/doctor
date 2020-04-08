import React from "react";

const SideDrawerComponent = props => {
  return (
    <div
      className="backdrop"
      onClick={props.onClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.75)",
        zIndex: "10"
      }}></div>
  );
};

export default SideDrawerComponent;
