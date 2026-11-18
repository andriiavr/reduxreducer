import { createAsyncThunk } from "@reduxjs/toolkit"

const BASE_URL = "https://jsonplaceholder.typicode.com/todos"

export const fetchTasks = createAsyncThunk("tasks/fetch", async (_, thunkAPI) => {
    try {
        const response = await axios.get(BASE_URL)
        return response.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message)
    }
})