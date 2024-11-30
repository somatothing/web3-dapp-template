import React from "react";
import ReactDOM from "react-dom/client"; // Updated import
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Find the root element in your HTML
const rootElement = document.getElementById("root");

// Create a React root and render the application
const root = ReactDOM.createRoot(rootElement); // Updated method
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
