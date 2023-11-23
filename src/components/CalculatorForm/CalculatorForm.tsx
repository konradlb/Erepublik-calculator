import { Form, useFormState } from "informed";

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
  const formState: any = useFormState();

  console.log("formState in cccc", formState);
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
