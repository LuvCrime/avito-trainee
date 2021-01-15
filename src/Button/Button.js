import React from "react";
import MaterialButton from "@material-ui/core/Button";
import "./PlainCssButtonDeep.css";

export default function Button(props) {
  return (
    <div>
      <MaterialButton variant="contained"  style={{
        borderRadius: 0,
        border: "1px solid lightgray",
        padding: "10px 14px",
        backgroundColor: "white",
        margin: "10px",
        lineHeight: "1.30rem", 
        fontSize: "12px",
        textAlign: "center",
        minWidth: "110px"
    }} 
    className="button" {...props}></MaterialButton>
    </div>
  );
}
