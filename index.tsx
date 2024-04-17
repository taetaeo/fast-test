import React from "react";
import ReactDOM from "react-dom/client";
import Test from "test";

const App = () => <Test />;

const container = document.getElementById("wrap") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(<App />);
