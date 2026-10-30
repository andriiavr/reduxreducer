import { useDispatch } from "react-redux"
import { Button } from "./Button"
import { addTask } from "../redux/tasksSlice"

export const TaskForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        dispatch(addTask(form.elements.text.value))
        form.reset()
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-1">
            <input type="text" name="text" placeholder="Enter task text..." className="grow p-2 rounded outline-1 focus:outline-[#1976d2]"/>
            <Button type="submit">Add Task</Button>
        </form>
    )
}