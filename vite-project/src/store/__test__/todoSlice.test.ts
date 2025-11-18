import todoReducer, { fetchTodos } from "../todoSlice";
import type { AnyAction } from "@reduxjs/toolkit";

describe("todoSlice tests", () => {
  const initialState = {
    data: [],
    loading: false,
    error: null,
  };

  it("should return initial state", () => {
    expect(todoReducer(undefined, {} as AnyAction)).toEqual(initialState);
  });

  it("should handle fetchTodos.pending", () => {
    const action = { type: fetchTodos.pending.type };
    const state = todoReducer(initialState, action);

    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  it("should handle fetchTodos.fulfilled", () => {
    const mockTodos = [
      { id: 1, title: "Test Todo", completed: false },
    ];

    const action = {
      type: fetchTodos.fulfilled.type,
      payload: mockTodos,
    };

    const state = todoReducer(initialState, action);

    expect(state.loading).toBe(false);
    expect(state.data).toEqual(mockTodos);
  });

  it("should handle fetchTodos.rejected", () => {
    const action = {
      type: fetchTodos.rejected.type,
      payload: "Error occurred",
    };

    const state = todoReducer(initialState, action);

    expect(state.loading).toBe(false);
    expect(state.error).toBe("Error occurred");
  });
});
