import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export const fetchTodos = createAsyncThunk<Todo[], void, { rejectValue: string }>(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<Todo[]>(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return response.data;
    } catch (err: unknown) {
      const error = err as AxiosError;

      return rejectWithValue(
        (error.response?.data as string) || "Something went wrong"
      );
    }
  }
);

interface TodoState {
  data: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  data: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Something went wrong";
      });
  },
});

export default todoSlice.reducer;
