import { useState } from "react";
import AppContextProvider from "../context/AppContextProvider";
import CalculatorForm from "./CalculatorForm/CalculatorForm";
import classes from "./app.module.css";

const App = () => {
  return (
    <AppContextProvider>
      <div className={classes.root}>
        <h1 className={classes.title}>Kalkulator opłacalności</h1>
        <CalculatorForm />
      </div>
    </AppContextProvider>
  );
};

export default App;
