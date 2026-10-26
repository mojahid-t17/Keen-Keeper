"use client";

import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const chartData = [
  { name: "Text", value: 5 },
  { name: "Call", value: 4 },
  { name: "Video", value: 3 },
];

const COLORS = ["#7C3AED", "#244D3F", "#36A269"];

const StatusPage = () => {
  return (
    <main className=" px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-5 text-3xl font-bold text-gray-800">
          Friendship Analytics
        </h1>

        <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm">
          <h2 className="mb-2 text-xs font-medium text-[#244D3F]">
            By Interaction Type
          </h2>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="45%"
                  innerRadius={38}
                  outerRadius={60}
                  paddingAngle={4}
                  stroke="none"
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>

                <Tooltip />
                <Legend
                  verticalAlign="bottom"
                  align="center"
                  iconType="circle"
                  iconSize={5}
                  wrapperStyle={{ fontSize: "10px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StatusPage;