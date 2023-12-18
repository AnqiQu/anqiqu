import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./config/routes";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {routes.map((route) => {
          return <Route path={route.path} element={route.element} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
