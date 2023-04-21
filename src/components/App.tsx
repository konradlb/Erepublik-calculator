import { useState } from "react";
import { Form, Debug, Input } from "informed";

import classes from "./app.module.css";

const INPUTS_FIELDS = [
  { name: "wraw", label: "wraw", type: "number" },
  { name: "fwar", label: "fraw", type: "number" },
  { name: "hraw", label: "hraw", type: "number" },
  { name: "araw", label: "araw", type: "number" },
  { name: "gold", label: "gold", type: "number" },
  { name: "workTax", label: "work tax", type: "number" },
  { name: "salary", label: "salary", type: "number" },
  { name: "", label: "", type: "number" },
  { name: "", label: "", type: "number" },
  { name: "", label: "", type: "number" },
];

function App() {
  const [count, setCount] = useState(0);

  const onSubmit = ({ values }: any) => {
    console.log("values");
    console.log(values);
  };

  const prices = {
    wraw: 30.5,
    fraw: 1.5,
    hraw: 843,
    araw: 760,
    fq1: 0.4,
    fq2: 0.64,
    fq3: 0.97,
    fq4: 1.25,
    fq5: 2.6,
    fq6: 3.14,
    fq7: 4.18,
    wq1: 1,
    wq2: 1,
    wq3: 1,
    wq4: 1,
    wq5: 1,
    wq6: 1,
    wq7: 91.5,
    hq1: 18190,
    hq2: 36872.4,
    hq3: 69996,
    hq4: 135899,
    hq5: 190874,
    awq1: 495,
    awq2: 1,
    awq3: 1,
    awq4: 1,
    awq5: 1,
  };

  const inputs = INPUTS_FIELDS.map((field) => (
    <div className={classes.formRow}>
      <Input
        className={classes.input}
        key={field.name}
        name={field.name}
        label={field.label}
        required={false}
        type={field.type ? field.type : undefined}
      />
    </div>
  ));

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Kalkulator opłacalności</h1>
      <Form className={classes.form} onSubmit={onSubmit}>
        {inputs}
      </Form>
      <table>
        <thead>
          <tr>
            <th>cena market</th>
            <th>wartość produkcji manager</th>
            <th>zarobek manager</th>
            <th>zarobek worker</th>
            <th>czas zwrotu fabryki manager</th>
            <th>czas zwrotu fabryki manager + worker</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default App;
