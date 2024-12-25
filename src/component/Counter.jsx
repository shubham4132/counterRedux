import { useSelector, useDispatch } from "react-redux";
export default function Counter() {
  const counter = useSelector((state) => state.counter);
  let dispatch = useDispatch();
  const handleClick = (type) => {
    dispatch({ type });
  };
  return (
    <>
      <span>counter:{counter}</span>
      <div>
        <button onClick={() => handleClick("add")}>Add</button>
        <button onClick={() => handleClick("minus")}>Minus</button>
      </div>
    </>
  );
}
