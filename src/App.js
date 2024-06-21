import "./App.css";
import React from "react";
import ReusableModalComp from "./components/ReusableModalComp";
import FormValidation from "./components/FormValidation";
import CounterComp from "./components/CounterComp";
import TodoAppComp from "./components/TodoAppComp";
import DataFetchingComp from "./components/DataFetchingComp";
// import SearchInputApi from "./components/SearchInputApi";
import WeatherApi from "./components/WeatherApi";
import SimpleNavigation from "./components/ReactRouter/SimpleNavigation";
import DynamicRoute from "./components/DynamicRouting/DynamicRoute";

const App = () => {
  return (
    <div className="App">
      <h4>Practising Most Asked Interview Coding Challenges</h4>
      <ReusableModalComp />
      <FormValidation />
      <CounterComp />
      <TodoAppComp />
      <DataFetchingComp />
      {/* <SearchInputApi /> */}
      {/* this is an example for search input api also */}
      <WeatherApi />   
      <SimpleNavigation />
      <DynamicRoute />
    </div>
  );
};

export default App;