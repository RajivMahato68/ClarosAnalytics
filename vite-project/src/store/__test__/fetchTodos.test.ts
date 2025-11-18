/// <reference types="jest" />
import axios from "axios";
import { fetchTodos } from "../todoSlice";
import type { AnyAction } from "@reduxjs/toolkit";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchTodos async thunk", () => {
  it("fetchTodos → success", async () => {
    mockedAxios.get.mockResolvedValue({
      data: [{ id: 1, title: "Todo 1", completed: false }],
    });

    const dispatch = jest.fn();
    const thunk = fetchTodos();

    await thunk(dispatch, () => ({}), undefined);

    const pending = dispatch.mock.calls[0][0] as AnyAction;
    const fulfilled = dispatch.mock.calls[1][0] as AnyAction;

    expect(pending.type).toBe(fetchTodos.pending.type);
    expect(fulfilled.type).toBe(fetchTodos.fulfilled.type);
    expect(fulfilled.payload).toEqual([
      { id: 1, title: "Todo 1", completed: false },
    ]);
  });

  it("fetchTodos → failure", async () => {
    mockedAxios.get.mockRejectedValue({
      response: { data: "Failed to fetch" },
    });

    const dispatch = jest.fn();
    const thunk = fetchTodos();

    await thunk(dispatch, () => ({}), undefined);

    const rejected = dispatch.mock.calls[1][0] as AnyAction;

    expect(rejected.type).toBe(fetchTodos.rejected.type);
    expect(rejected.payload).toBe("Failed to fetch");
  });
});
