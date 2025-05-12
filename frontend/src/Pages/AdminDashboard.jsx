import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
} from "recharts";
import {
  Menu,
  X,
  Home,
  FileText,
  FolderOpen,
  PlusCircle,
  Settings,
  BarChart3,
  DoorClosed,
} from "lucide-react";
import { signOutAction } from "../Store/action-creators";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUsersList } from "../Firebase/RealtimeDatabase/functions";

const blogData = [
  { id: 1, title: "React Hooks Explained", date: "2025-05-01" },
  { id: 2, title: "Understanding Node.js Streams", date: "2025-04-20" },
];

const projectData = [
  { id: 1, name: "Portfolio Website", status: "Completed" },
  { id: 2, name: "AI Chatbot", status: "In Progress" },
];

const userAnalytics = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 300 },
  { name: "Mar", users: 500 },
  { name: "Apr", users: 700 },
  { name: "May", users: 820 },
  { name: "Jun", users: 600 },
];

const revenueGrowth = [
  { name: "Jan", revenue: 500 },
  { name: "Feb", revenue: 600 },
  { name: "Mar", revenue: 700 },
  { name: "Apr", revenue: 800 },
  { name: "May", revenue: 950 },
  { name: "Jun", revenue: 1100 },
];

const genderDistribution = [
  { name: "Male", value: 60 },
  { name: "Female", value: 30 },
  { name: "Other", value: 10 },
];

const newUsers = [
  { name: "Jan", newUsers: 100 },
  { name: "Feb", newUsers: 150 },
  { name: "Mar", newUsers: 200 },
  { name: "Apr", newUsers: 250 },
  { name: "May", newUsers: 300 },
  { name: "Jun", newUsers: 350 },
];

const userActivity = [
  { name: "Jan", active: 250, inactive: 150 },
  { name: "Feb", active: 200, inactive: 100 },
  { name: "Mar", active: 400, inactive: 100 },
  { name: "Apr", active: 500, inactive: 150 },
  { name: "May", active: 600, inactive: 220 },
  { name: "Jun", active: 700, inactive: 100 },
];

const menuItems = [
  { name: "Home", icon: Home, path: "/admin" },
  { name: "Blogs", icon: FileText, path: "/blog" },
  { name: "Projects", icon: FolderOpen, path: "/projects" },
  { name: "Analytics", icon: BarChart3, path: "/analytics" },
  { name: "Settings", icon: Settings, path: "/settings" },
  { name: "Logout", icon: DoorClosed, path: "#" },
];

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 640);
  const dispatch = useDispatch();
  const [registrationData, setRegistrationData] = useState([
    {
      id: 1,
      username: "JohnDoe",
      email: "",
      date: "2025-05-01",
      lastLogin: "2025-05-03",
    },
  ]);
  useEffect(() => {
    getUsersList()
      .then((res) => {
        if (res == undefined) {
          setRegistrationData([
            {
              id: 1,
              username: "JohnDoe",
              email: "",
              date: "2025-05-01",
              lastLogin: "2025-05-03",
            },
          ]);
        } else {
          setRegistrationData(res);
        }
      })
      .catch(() => {
        setRegistrationData([
          {
            id: 1,
            username: "JohnDoe",
            email: "",
            date: "2025-05-01",
            lastLogin: "2025-05-03",
          },
        ]);
      });
  }, []);
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 flex flex-col bg-gray-800 shadow-2xl ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {sidebarOpen && (
            <h1 className="text-xl font-bold">Portfolio Dashboard</h1>
          )}
        </div>

        {/* Sidebar Links */}
        <nav
          className={`flex flex-col p-4 gap-2 ${
            !sidebarOpen ? "items-center" : "items-start"
          }`}
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-200"
            >
              {item.name != "Logout" && (
                <>
                  <item.icon size={20} />
                  {sidebarOpen && <span className="text-sm">{item.name}</span>}
                </>
              )}
              {item.name == "Logout" && (
                <>
                  <item.icon
                    size={20}
                    onClick={async () => {
                      await signOutAction(dispatch, []);
                    }}
                  />
                  {sidebarOpen && (
                    <span
                      className="text-sm"
                      onClick={async () => {
                        await signOutAction(dispatch, []);
                      }}
                    >
                      {item.name}
                    </span>
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto bg-gray-800 rounded-tl-2xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-100">
          Portfolio Admin
        </h2>

        {/* Blogs and Projects Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-100">
                Blog Posts
              </h3>
              <button className="flex gap-2 items-center text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Link to={"/blogUpload"}><PlusCircle size={16} /></Link>
                <Link to={"/blogUpload"}>Add Blog</Link>
              </button>
            </div>
            <ul className="divide-y divide-gray-700">
              {blogData.map((blog) => (
                <li key={blog.id} className="py-3">
                  <div className="flex justify-between text-gray-300">
                    <span>{blog.title}</span>
                    <span className="text-sm text-gray-500">{blog.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-100">Projects</h3>
              <button className="flex gap-2 items-center text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Link to={"/projectUpload"}><PlusCircle size={16} /></Link>
                <Link to={"/projectUpload"}> Add Project</Link>
              </button>
            </div>
            <ul className="divide-y divide-gray-700">
              {projectData.map((project) => (
                <li key={project.id} className="py-3">
                  <div className="flex justify-between text-gray-300">
                    <span>{project.name}</span>
                    <span className="text-sm text-gray-500">
                      {project.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* User Analytics (Bar Chart) */}
          <div className="bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-100">
              User Analytics (Monthly)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userAnalytics}>
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip wrapperClassName="rounded shadow-md bg-gray-800 text-gray-100" />
                <Bar
                  dataKey="users"
                  fill="#3b82f6"
                  barSize={40}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Revenue Growth (Line Chart) */}
          <div className="bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-100">
              Revenue Growth
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueGrowth}>
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip wrapperClassName="rounded shadow-md bg-gray-800 text-gray-100" />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3b82f6"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* New Users (Line Chart) */}
          <div className="bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-100">
              New Users
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={newUsers}>
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip wrapperClassName="rounded shadow-md bg-gray-800 text-gray-100" />
                <Line type="monotone" dataKey="newUsers" stroke="#3b82f6" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* User Activity (Bar Chart) */}
          <div className="bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-100">
              User Activity vs Inactive
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userActivity}>
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip wrapperClassName="rounded shadow-md bg-gray-800 text-gray-100" />
                <Bar
                  dataKey="active"
                  fill="#3b82f6"
                  barSize={40}
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="inactive"
                  fill="#ef4444"
                  barSize={40}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* User Gender Distribution (Pie Chart) */}
          <div className="bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-100">
              Gender Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={genderDistribution}
                  dataKey="value"
                  nameKey="name"
                  outerRadius="80%"
                  fill="#3b82f6"
                  label
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Registration and Login Table */}
        <div className="bg-gray-900 rounded-xl shadow-lg p-6 mt-8 hover:shadow-xl transition-shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-100">
            User Registrations and Logins
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto hidden sm:table">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">
                    Username
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">
                    Registration Email
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">
                    Registration Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-400">
                    Last Login
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(registrationData).map((v, i) => {
                  return (
                    <tr key={v[1].id} className="border-b border-gray-700">
                      <td className="px-6 py-3 text-gray-300">
                        {v[1].username}
                      </td>
                      <td className="px-6 py-3 text-gray-300">{v[1].email}</td>
                      <td className="px-6 py-3 text-gray-300">{v[1].date}</td>
                      <td className="px-6 py-3 text-gray-300">
                        {v[1].lastLogin}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* Mobile Card Layout */}
            <div className="sm:hidden space-y-4">
              {Object.entries(registrationData).map((v, i) => {
                return (
                  <div
                    key={v[1].id}
                    className="bg-gray-800 rounded-lg p-4 border border-gray-700"
                  >
                    <div className="flex flex-col gap-2">
                      <div>
                        <span className="text-sm font-medium text-gray-400">
                          Username:{" "}
                        </span>
                        <span className="text-gray-300">{v[1].username}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-400">
                          Email:{" "}
                        </span>
                        <span className="text-gray-300">{v[1].email}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-400">
                          Registration Date:{" "}
                        </span>
                        <span className="text-gray-300">{v[1].date}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-400">
                          Last Login:{" "}
                        </span>
                        <span className="text-gray-300">{v[1].lastLogin}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
