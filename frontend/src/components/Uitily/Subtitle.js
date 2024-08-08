import React from "react";

const Subtitle = ({ title, btn_title , handle_click }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "15px",
        marginBottom:"15px"
      }}
    >
      <div style={{ fontSize: "25px", fontWeight: "bold" }}>{title}</div>
      {btn_title ? (
        <button
        className="btn-title"
        onClick={handle_click}
        >
          {btn_title}
        </button>
      ) : null}
    </div>
  );
};

export default Subtitle;
