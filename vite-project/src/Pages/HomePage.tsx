import React from "react";
import { sampleData } from "../Data/SimpleData";
export const HomePage: React.FC = () => {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Total Users</h3>
          <p className="text-3xl font-bold">{sampleData.length}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Active</h3>
          <p className="text-3xl font-bold">
            {sampleData.filter((d) => d.status === "Active").length}
          </p>
        </div>
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg p-6 text-white shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Admins</h3>
          <p className="text-3xl font-bold">
            {sampleData.filter((d) => d.role === "Admin").length}
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Managers</h3>
          <p className="text-3xl font-bold">
            {sampleData.filter((d) => d.role === "Manager").length}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Overview</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-gray-700">Recent Activity</span>
            <span className="text-blue-600 font-semibold">24 new items</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-gray-700">Pending Tasks</span>
            <span className="text-orange-600 font-semibold">12 tasks</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-700">Completed Today</span>
            <span className="text-green-600 font-semibold">8 tasks</span>
          </div>
        </div>
      </div>
    </div>
  );
};
