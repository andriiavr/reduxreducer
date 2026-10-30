import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteTask, toggleTask } from "../redux/tasksSlice";

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleSelect = () => dispatch(toggleTask(task.id));
  return (
    <div className="flex items-center gap-3 py-2">
      <input type="checkbox" checked={task.completed} onChange={handleSelect} className="w-6 h-6 cursor-pointer" />
      <p className="grow">{task.text}</p>
      <button
        type="button"
        className="m-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded border-none bg-transparent p-0 text-[#f44336] hover:bg-[#e2e5e8] active:bg-[#bdbdbd]"
        onClick={handleDelete}
      >
        <MdDelete />
      </button>
    </div>
  );
};
