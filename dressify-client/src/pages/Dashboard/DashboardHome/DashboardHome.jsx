import useAuth from "../../../hooks/useAuth";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 4000, revenue: 2400, profit: 2400 },
  { name: "Feb", sales: 3000, revenue: 1398, profit: 2210 },
  { name: "Mar", sales: 2000, revenue: 9800, profit: 2290 },
  { name: "Apr", sales: 2780, revenue: 3908, profit: 2000 },
  { name: "May", sales: 1890, revenue: 4800, profit: 2181 },
  { name: "Jun", sales: 2390, revenue: 3800, profit: 2500 },
  { name: "Jul", sales: 3490, revenue: 4300, profit: 2100 },
];

const pieData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const salesData = [
  { name: "Jan", sales: 4000, returns: 240, revenue: 2400 },
  { name: "Feb", sales: 3000, returns: 139, revenue: 2210 },
  { name: "Mar", sales: 2000, returns: 980, revenue: 2290 },
  { name: "Apr", sales: 2780, returns: 390, revenue: 2000 },
  { name: "May", sales: 1890, returns: 480, revenue: 2181 },
  { name: "Jun", sales: 2390, returns: 380, revenue: 2500 },
  { name: "Jul", sales: 3490, returns: 430, revenue: 2100 },
];

const inventoryData = [
  { name: "Dresses", stock: 120, sold: 80 },
  { name: "Skirts", stock: 90, sold: 50 },
  { name: "Blouses", stock: 150, sold: 90 },
  { name: "Trousers", stock: 100, sold: 70 },
];

const feedbackData = [
  { subject: "Quality", A: 120, B: 110, fullMark: 150 },
  { subject: "Price", A: 98, B: 130, fullMark: 150 },
  { subject: "Service", A: 86, B: 130, fullMark: 150 },
  { subject: "Variety", A: 99, B: 100, fullMark: 150 },
  { subject: "Availability", A: 85, B: 90, fullMark: 150 },
  { subject: "Shipping", A: 65, B: 85, fullMark: 150 },
];

const DashboardHome = () => {
  const { user } = useAuth();

  return (
    <div className="w-full ms-4">
      <h2 className="text-3xl mt-12 font-semibold">
        Hi,{" "}
        <span className="text-4xl text-pink-600 me-2">{user?.displayName}</span>
        Welcome Back!
      </h2>

      <div style={{ width: "100%", height: 300, marginTop: 20 }}>
        <h3 className="text-center">Customer Feedback</h3>
        <ResponsiveContainer>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={feedbackData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Feedback A"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Radar
              name="Feedback B"
              dataKey="B"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="mt-6">Sales Dashboard</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "45%", height: 300 }}>
            <h3>Line Chart</h3>
            <ResponsiveContainer>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div style={{ width: "45%", height: 300, marginTop: 20 }}>
            <h3>Pie Chart</h3>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  dataKey="value"
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#bf19a4"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Dress Shop Dashboard</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "45%", height: 300 }}>
            <h3>Sales Overview</h3>
            <ResponsiveContainer>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                <Line type="monotone" dataKey="returns" stroke="#ff7300" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div style={{ width: "45%", height: 300 }}>
            <h3>Inventory Status</h3>
            <ResponsiveContainer>
              <BarChart data={inventoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="stock" fill="#8884d8" />
                <Bar dataKey="sold" fill="#9e1052" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
