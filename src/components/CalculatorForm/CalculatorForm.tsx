import { useContext } from "react";
import {
  AppContext,
  AppContextType,
  FormValuesInterface,
} from "../../context/AppContextProvider";

import FormInput from "./FormInput";

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

const INPUTS_FIELDS = [
  { id: 1, name: "wraw", label: "wraw", type: "number" },
  { id: 2, name: "fraw", label: "fraw", type: "number" },
  { id: 3, name: "hraw", label: "hraw", type: "number" },
  { id: 4, name: "araw", label: "araw", type: "number" },
  { id: 5, name: "gold", label: "gold", type: "number" },
  { id: 6, name: "workTax", label: "work tax", type: "number" },
  { id: 7, name: "salary", label: "salary", type: "number" },
  { id: 8, name: "wBonus", label: "wBonus", type: "number" },
  { id: 9, name: "fBonus", label: "fBonus", type: "number" },
  { id: 10, name: "hBonus", label: "hBonus", type: "number" },
  { id: 11, name: "aBonus", label: "aBonus", type: "number" },
];

const CalculatorForm = () => {
  const { formValues, setFormValues } = useContext(
    AppContext
  ) as AppContextType;

  console.log("formValues", formValues);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!isNaN(parseInt(e.target.value))) {
      setFormValues({
        ...formValues,
        [e.target.name]: parseInt(e.target.value),
      });
    }
  };

  const val: number = 11;

  const inputs = INPUTS_FIELDS.map((input) => (
    <div key={input.id} className={classes.formRow}>
      <FormInput
        {...input}
        value={formValues[input.name]}
        onChange={onChange}
      />
    </div>
  ));

  return <div className={classes.container}>{inputs}</div>;
};

export default CalculatorForm;
