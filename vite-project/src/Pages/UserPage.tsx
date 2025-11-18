import React from "react";
import { sampleData } from "../Data/SimpleData";
export const UsersPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          User Management
        </h1>
        <p className="text-gray-600">Manage user accounts and permissions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sampleData.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {user.name.charAt(0)}
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.role}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2">{user.email}</p>
            <div className="flex justify-between items-center mt-4">
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  user.status === "Active"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {user.status}
              </span>
              <span className="text-xs text-gray-500">{user.joinDate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
