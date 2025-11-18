import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export const HomePage: React.FC = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.todos
  );

  const todos = (data || []) as Array<{ completed: boolean }>;

  // Counts from API
  const totalUsers = todos.length;
  const completedTrue = todos.filter((d) => d.completed === true).length;
  const completedFalse = todos.filter((d) => d.completed === false).length;

  if (loading)
    return <p className="text-center text-blue-600 text-lg">Loading...</p>;

  if (error)
    return <p className="text-center text-red-600 text-lg">Error: {error}</p>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome to Dashboard
        </h1>
        <p className="text-gray-600">
          Manage your data and settings efficiently
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Total Users</h3>
          <p className="text-3xl font-bold">{totalUsers}</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Completed (True)</h3>
          <p className="text-3xl font-bold">{completedTrue}</p>
        </div>

        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-6 text-white shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Not Completed (False)</h3>
          <p className="text-3xl font-bold">{completedFalse}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Overview</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-gray-700">Total Todos</span>
            <span className="text-blue-600 font-semibold">{totalUsers}</span>
          </div>

          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-gray-700">Completed Tasks</span>
            <span className="text-green-600 font-semibold">
              {completedTrue}
            </span>
          </div>

          <div className="flex justify-between items-center py-2">
            <span className="text-gray-700">Pending Tasks</span>
            <span className="text-red-600 font-semibold">{completedFalse}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
