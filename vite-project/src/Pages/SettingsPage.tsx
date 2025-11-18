import React from "react";
export const SettingsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Settings</h1>
        <p className="text-gray-600">Configure your dashboard preferences</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              General Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-gray-700">Email Notifications</span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Enabled
                </button>
              </div>
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-gray-700">Dark Mode</span>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg text-sm transition-colors">
                  Disabled
                </button>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-gray-700">Auto-save</span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Enabled
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Account Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-gray-700">Two-Factor Authentication</span>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                  Enabled
                </button>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-gray-700">Session Timeout</span>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>30 minutes</option>
                  <option>1 hour</option>
                  <option>4 hours</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
