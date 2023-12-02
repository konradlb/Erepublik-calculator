import { useState, useRef, useEffect, useContext } from "react";

import {
  AppContext,
  AppContextType,
  FormValuesInterface,
} from "../../context/AppContextProvider";

import classes from "./table.module.css";

const RAW_PRODUCTION = {
  q1: 0.35,
  q2: 0.7,
  q3: 1.25,
  q4: 1.75,
  q5: 2.5,
};

const Table = () => {
  const { formValues, setFormValues } = useContext(
    AppContext
  ) as AppContextType;

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
  } = formValues;

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
  );
};

export default Table;
