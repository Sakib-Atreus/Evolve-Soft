import React from "react";
import {
  Bar,
  CartesianGrid,
  Pie,
  PieChart,
  RadarChart,
  Tooltip,
  XAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    { name: "A1", value: 60 },
    { name: "A2", value: 59 },
    { name: "A3", value: 60 },
    { name: "A4", value: 57 },
    { name: "A5", value: 60 },
    { name: "A6", value: 53 },
    { name: "A7", value: 60 },
    { name: "A8", value: 60 },
  ];

  return (
    <div>
        <div className="flex items-center justify-center min-h-[60vh]">
          <PieChart width={300} height={300}>
            <Pie
              dataKey="value"
              startAngle={360}
              endAngle={0}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={90}
              fill="#ff0844"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
        <h2 className="text-4xl font-bold mb-12 text-center text-red-600">*** My Assignment Marks PieChart ***</h2>
    </div>
  );
};

export default Dashboard;
