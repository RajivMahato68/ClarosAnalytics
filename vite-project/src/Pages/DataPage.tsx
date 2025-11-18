import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { fetchTodos } from "../store/todoSlice";
import Pagination from "../components/comman/Pagination";
import type { Todo } from "../store/todoSlice";

export const DataPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.todos
  );

  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  // Search
  const filteredData = useMemo(() => {
    if (!query.trim()) return data;

    return data.filter((item: Todo) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, data]);

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  if (loading)
    return (
      <p className="text-center text-lg font-medium text-blue-600">
        Loading...
      </p>
    );

  if (error)
    return (
      <p className="text-center text-lg font-medium text-red-600">
        Error: {error}
      </p>
    );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Todo Management
        </h1>
        <p className="text-gray-600">Fetched via JSONPlaceholder API</p>
      </div>

      {/* Search */}
      <div className="flex justify-end">
        <input
          type="text"
          placeholder="Search title..."
          className="px-4 py-2 border rounded-md w-64 focus:ring-2 focus:ring-blue-500"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {["ID", "Title", "Completed"].map((head) => (
                  <th
                    key={head}
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.map((item: Todo) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-4 text-sm text-gray-900">{item.id}</td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">
                    {item.title}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${
                        item.completed
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {item.completed ? "Completed" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page: number) => {
          if (page >= 1 && page <= totalPages) setCurrentPage(page);
        }}
      />
    </div>
  );
};
