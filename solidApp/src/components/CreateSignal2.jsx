import { createSignal } from "solid-js";

/**
 * @function
 * @returns ### componente que renderiza as entradas do componente Form no html
 * */
const BasicComponent = (props) => {
  const value = props.value || "default";

  return <div>{value}</div>;
};

/**
 * @function
 * @returns ### componente Form que printa as entradas do input em tempo real 
 * */
export default function Form() {
  const [value, setValue] = createSignal("");

  return (
    <div>
      <BasicComponent value={value} />
      <input type="text" oninput={(e) => setValue(e.currentTarget.value)} />
    </div>
  );
}