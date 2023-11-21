import CalculatorForm from "./CalculatorForm/CalculatorForm";
import classes from "./app.module.css";

const App = () => {
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Kalkulator opłacalności</h1>
      <CalculatorForm />
    </div>
  );
};

export default App;
