import { useDispatch } from "react-redux";
import { filterChange } from "../reducers/filterReducer";

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(filterChange(event.target.value));
  };

  const style = {
    marginBottom: "20px"
  }

  return (
    <div style={style}>
      <span>filter</span>
      <input type="search" onInput={handleFilter} placeholder="search for anecdote"></input>
    </div>
  );
};

export default Filter;
