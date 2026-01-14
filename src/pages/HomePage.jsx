import React from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, UserX, ChevronRight } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "privacy policy",
      description: "Read our usage policy and legal agreements.",
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      path: "/privacy-policy",
      color: "hover:bg-blue-50",
    },
    {
      title: "Delete Account",
      description: "Permanently remove your data and profile.",
      icon: <UserX className="w-5 h-5 text-red-600" />,
      path: "/delete-account",
      color: "hover:bg-red-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
          <p className="text-gray-500 text-sm">Manage your preferences and legal data.</p>
        </header>

        <div className="space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center justify-between p-4 rounded-xl border border-gray-100 transition-all duration-200 group ${item.color}`}
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-50">
                  {item.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
