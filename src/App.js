import "./App.css";
import React from "react";
import ReusableModalComp from "./components/ReusableModalComp";
import FormValidation from "./components/FormValidation";
import CounterComp from "./components/CounterComp";
import TodoAppComp from "./components/TodoAppComp";
import DataFetchingComp from "./components/DataFetchingComp";

const App = () => {
  return (
    <div className="App">
      <h4>Practising Most Asked Interview Coding Challenges</h4>
      <ReusableModalComp />
      <FormValidation />
      <CounterComp />
      <TodoAppComp />
      <DataFetchingComp />
    </div>
  );
};

export default App;