import { useState } from "react";

import classes from "./app.module.css";

function App() {
  const [count, setCount] = useState(0);

  return <div className={classes.root}></div>;
}

export default App;
