import React, { useState, useContext } from "react";

export interface FormValuesInterface {
  [key: string]: number;
}

export type AppContextType = {
  formValues: FormValuesInterface;
  setFormValues: (formValues: FormValuesInterface) => void;
};

interface Props {
  children: React.ReactNode;
}

export const AppContext = React.createContext<AppContextType | null>(null);

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

const AppContextProvider = (props: Props) => {
  const { children } = props;
  const [formValues, setFormValues] =
    useState<FormValuesInterface>(INITIAL_VALUES);

  return (
    <AppContext.Provider value={{ formValues, setFormValues }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
