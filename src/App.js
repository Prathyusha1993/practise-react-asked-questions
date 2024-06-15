import "./App.css";
import React from "react";
import ReusableModalComp from "./components/ReusableModalComp";
import FormValidation from "./components/FormValidation";

const App = () => {
  return (
    <div className="App">
      <h4>Practising Most Asked Interview Coding Challenges</h4>
      <ReusableModalComp />
      <FormValidation />
    </div>
  );
};

export default App;
