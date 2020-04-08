import React from "react";

const SideDrawerComponent = props => {
  return (
    <aside
      className="side-drawer"
      onClick={props.onClick}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: "100",
        height: "100vh",
        width: "70%",
        background: "#fff",
        boxShadow: " 0 2px 8px rgba(0, 0, 0, 0.26)",
        display: props.show ? "block" : "none",
        transition: "2s ease-in"
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          marginTop: "10rem"
        }}>
        {props.children}
      </div>
    </aside>
  );
};

export default SideDrawerComponent;
