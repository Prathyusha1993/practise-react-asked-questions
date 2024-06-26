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
import ThemeApp from "./components/ThemeToggle/ThemeApp";
import EcommerceProductListing from "./components/EcommerceProductListing";
// import ChatApp from "./components/ChatApp";
import AuthApp from "./components/AuthApp";
import CountEx from "./components/CountEx";
import TrafficLight from "./components/TrafficLight";

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
      <ThemeApp />
      <EcommerceProductListing />
      {/* <ChatApp /> */}
      <AuthApp />
      <CountEx />
      <TrafficLight />
    </div>
  );
};

export default App;