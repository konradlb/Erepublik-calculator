import classes from "./FormInput.module.css";
import { FormValuesInterface } from "../../context/AppContextProvider";

type Props = {
  id: number;
  name: string;
  label: string;
  type: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = (props: Props) => {
  const { name, label, type, value, onChange } = props;
  return (
    <div className={classes.formInput}>
      <label className={classes.label}>{label}</label>
      <input
        className={classes.input}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
      />
    </div>
  );
};

export default FormInput;
