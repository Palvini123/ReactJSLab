import * as React from "react";
import Button from "@mui/material/Button";

const inputBox = {
  width: "100%",
  padding: "12px 20px",
  color: "red",
  margin: "8px 0",
  display: "inline-block",
  border: "1px solid #ccc",
  boxSizing: "border-box"
};

const buttonStyle = {
  background: "#04AA6D",
  color: "white",
  padding: "14px 20px",
  margin: "8px 0",
  border: "none",
  width: "100%"
};

export default function App() {
  return (
    <div>
      <ul>
        <li>
          <input style={inputBox} type="text" value="UserName" />
        </li>
        <li>
          <input style={inputBox} type="password" value="PassWord" />
        </li>
        <button style={buttonStyle} type="button">
          Click Me!
        </button>
        <Button variant="contained">Hello World</Button>;
      </ul>
    </div>
  );
}
