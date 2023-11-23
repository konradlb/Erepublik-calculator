import { useState, useRef, useEffect, useContext } from "react";
import {
  Form,
  Input,
  useFormApi,
  useFormState,
  useFieldState,
  FormState,
} from "informed";

import {
  AppContext,
  AppContextType,
  FormValuesInterface,
} from "../../context/AppContextProvider";

import classes from "./formContent.module.css";

const INPUTS_FIELDS = [
  { name: "wraw", label: "wraw", type: "number" },
  { name: "fraw", label: "fraw", type: "number" },
  { name: "hraw", label: "hraw", type: "number" },
  { name: "araw", label: "araw", type: "number" },
  { name: "gold", label: "gold", type: "number" },
  { name: "workTax", label: "work tax", type: "number" },
  { name: "salary", label: "salary", type: "number" },
  { name: "wBonus", label: "wBonus", type: "number" },
  { name: "fBonus", label: "fBonus", type: "number" },
  { name: "hBonus", label: "hBonus", type: "number" },
  { name: "aBonus", label: "aBonus", type: "number" },
];

const RAW_PRODUCTION = {
  q1: 0.35,
  q2: 0.7,
  q3: 1.25,
  q4: 1.75,
  q5: 2.5,
};

const FormContent = () => {
  const formState: any = useFormState();

  const { formValues, setFormValues } = useContext(
    AppContext
  ) as AppContextType;

  console.log("formValues", formValues);

  const {
    wraw,
    fraw,
    hraw,
    araw,
    gold,
    workTax,
    salary,
    wBonus,
    fBonus,
    hBonus,
    aBonus,
  } = formState.values;

  const factoryPrices = {
    rawq1: 1500,
    rawq2: 3000,
    rawq3: 10 * gold,
    rawq4: 8500,
    rawq5: 35 * gold,
    factoryq1: 10 * gold,
    factoryq2: (10 + 20) * gold,
    factoryq3: (10 + 20 + 70) * gold,
    factoryq4: (10 + 20 + 70 + 170) * gold,
    factoryq5: (10 + 20 + 70 + 170 + 370) * gold,
    factoryq6: (10 + 20 + 70 + 170 + 370 + 770) * gold,
    factoryq7: (10 + 20 + 70 + 170 + 370 + 770 + 1220) * gold,
  };

  const prices = {
    wraw: 25,
    fraw: 2,
    hraw: 807,
    araw: 800,
    fq1: 0.49,
    fq2: 1.2,
    fq3: 1.56,
    fq4: 2.16,
    fq5: 3.19,
    fq6: 3.92,
    fq7: 5,
    wq1: 1,
    wq2: 1,
    wq3: 1,
    wq4: 1,
    wq5: 1,
    wq6: 1,
    wq7: 88.33,
    hq1: 18246,
    hq2: 41000,
    hq3: 86998,
    hq4: 172000,
    hq5: 227000,
    awq1: 530,
    awq2: 700,
    awq3: 1555,
    awq4: 1103,
    awq5: 1300,
  };

  const companies = [
    {
      name: "Wep RAW Q1",
      prodValGross: ((RAW_PRODUCTION.q1 * wBonus) / 100) * wraw,
      prodValNet: ((RAW_PRODUCTION.q1 * wBonus) / 100) * wraw - workTax,
      prodValWorker: ((RAW_PRODUCTION.q1 * wBonus) / 100) * wraw - salary,
      returnTimeManager:
        factoryPrices.rawq1 /
        (((RAW_PRODUCTION.q1 * wBonus) / 100) * wraw - workTax),
      returnTimeWorker:
        factoryPrices.rawq1 /
        (((RAW_PRODUCTION.q1 * wBonus) / 100) * wraw - salary),
    },
    {
      name: "Wep RAW Q4",
      prodValGross: ((RAW_PRODUCTION.q4 * wBonus) / 100) * wraw,
      prodValNet: ((RAW_PRODUCTION.q4 * wBonus) / 100) * wraw - workTax,
      prodValWorker: ((RAW_PRODUCTION.q4 * wBonus) / 100) * wraw - salary,
      returnTimeManager:
        factoryPrices.rawq4 /
        (((RAW_PRODUCTION.q4 * wBonus) / 100) * wraw - workTax),
      returnTimeWorker:
        factoryPrices.rawq4 /
        (((RAW_PRODUCTION.q4 * wBonus) / 100) * wraw - salary),
    },
    {
      name: "Wep RAW Q5",
      prodValGross: ((RAW_PRODUCTION.q5 * wBonus) / 100) * wraw,
      prodValNet: ((RAW_PRODUCTION.q5 * wBonus) / 100) * wraw - workTax,
      prodValWorker: ((RAW_PRODUCTION.q5 * wBonus) / 100) * wraw - salary,
      returnTimeManager:
        factoryPrices.rawq5 /
        (((RAW_PRODUCTION.q5 * wBonus) / 100) * wraw - workTax),
      returnTimeWorker:
        factoryPrices.rawq5 /
        (((RAW_PRODUCTION.q5 * wBonus) / 100) * wraw - salary),
    },
    {
      name: "Food RAW Q4",
      prodValGross: ((RAW_PRODUCTION.q4 * fBonus) / 100) * fraw,
      prodValNet: ((RAW_PRODUCTION.q4 * fBonus) / 100) * fraw - workTax,
      prodValWorker: ((RAW_PRODUCTION.q4 * fBonus) / 100) * fraw - salary,
      returnTimeManager:
        factoryPrices.rawq4 /
        (((RAW_PRODUCTION.q4 * fBonus) / 100) * fraw - workTax),
      returnTimeWorker:
        factoryPrices.rawq4 /
        (((RAW_PRODUCTION.q4 * fBonus) / 100) * fraw - salary),
    },
    {
      name: "Food RAW Q5",
      prodValGross: ((RAW_PRODUCTION.q5 * fBonus) / 100) * fraw,
      prodValNet: ((RAW_PRODUCTION.q5 * fBonus) / 100) * fraw - workTax,
      prodValWorker: ((RAW_PRODUCTION.q5 * fBonus) / 100) * fraw - salary,
      returnTimeManager:
        factoryPrices.rawq5 /
        (((RAW_PRODUCTION.q5 * fBonus) / 100) * fraw - workTax),
      returnTimeWorker:
        factoryPrices.rawq5 /
        (((RAW_PRODUCTION.q5 * fBonus) / 100) * fraw - salary),
    },
  ];

  const inputs = INPUTS_FIELDS.map((field) => (
    <div key={field.name} className={classes.formRow}>
      <Input
        className={classes.input}
        name={field.name}
        label={field.label ? field.label : field.name}
        required={false}
        type={field.type ? field.type : undefined}
      />
    </div>
  ));

  const companiesElements = companies.map((company) => (
    <tr className={classes.tableRow} key={company.name}>
      <td className={classes.tableCell}>{company.name}</td>
      <td className={classes.tableCell}>{company.prodValGross} cc</td>
      <td className={classes.tableCell}>{company.prodValNet} cc</td>
      <td className={classes.tableCell}>{company.prodValWorker} cc</td>
      <td className={classes.tableCell}>{company.returnTimeManager} dni</td>
      <td className={classes.tableCell}>{company.returnTimeWorker} dni</td>
    </tr>
  ));

  return (
    <div>
      {inputs}
      <table className={classes.table}>
        <thead className={classes.tableHead}>
          <tr className={classes.tableRow}>
            <th>nazwa</th>
            <th>wartość produkcji manager</th>
            <th>zarobek manager</th>
            <th>zarobek worker</th>
            <th>czas zwrotu fabryki manager</th>
            <th>czas zwrotu fabryki manager + worker</th>
          </tr>
        </thead>
        <tbody className={classes.tableBody}>{companiesElements}</tbody>
      </table>
    </div>
  );
};

export default FormContent;
