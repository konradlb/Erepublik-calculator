import React from "react";
import { Form } from "informed";

import FormContent from "./FormContent";
import classes from "./calculatorForm.module.css";

const INITIAL_VALUES = {
  wraw: 25,
  fraw: 2,
  hraw: 807.99,
  araw: 750,
  gold: 947,
  workTax: 4349.92 / 112,
  salary: 4301,
  wBonus: 189,
  fBonus: 175,
  hBonus: 190,
  aBonus: 139.99,
};
const CalculatorForm = () => {
  return (
    <Form
      initialValues={INITIAL_VALUES}
      name="erepForm"
      className={classes.form}
    >
      <FormContent />
    </Form>
  );
};

export default CalculatorForm;
