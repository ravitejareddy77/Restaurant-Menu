import React from "react";
import reactDom from 'react-dom/client'
import App from "./App";
import "./index.css"
console.log(reactDom);
console.log(React);


reactDom.createRoot(document.getElementById("root")).render(<App/>)

