import { useDispatch, useSelector } from "react-redux";
import { Button } from "./Button";
import { statusFilters } from "../redux/constants";
import { getStatusFilter } from "../redux/selectors";
import { setStatusFilter } from "../redux/filtersSlice";

export const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch()
  const handleFilterChange = (value) => dispatch(setStatusFilter(value));

  console.log(filter === statusFilters.all)
  return (
    <div className="flex gap-1">
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Acitve
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
