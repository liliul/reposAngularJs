import { createSignal } from "solid-js";

const BasicComponent = (props) => {
  const value = props.value || "default";

  return <div>{value}</div>;
};

export default function Form() {
  const [value, setValue] = createSignal("");

  return (
    <div>
      <BasicComponent value={value} />
      <input type="text" oninput={(e) => setValue(e.currentTarget.value)} />
    </div>
  );
}