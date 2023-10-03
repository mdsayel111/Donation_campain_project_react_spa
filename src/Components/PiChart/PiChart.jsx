import React, { PureComponent, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { getItemsFromLocale } from "../../utilities/Utilities";

const PiChart = () => {
  const [screenSize, setscreenSize] = useState(screen.width)
  const donations = JSON.parse(getItemsFromLocale());
  let A = 0;
  let B = 1;
  if (donations) {
    A = donations.length;
    B = 12 - A;
  }
  const data = [
    { name: "Group A", value: A },
    { name: "Group B", value: B },
  ];

  const COLORS = ["#00C49F", "#FF444A"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  let outerRadious = screenSize >= 700 ? 200 : 150
 window.addEventListener("resize",()=>{
    setscreenSize(screen.width)
  })
  return (
    <>
      <div className="flex items-center h-[80vh] justify-center">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={outerRadious}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex justify-center gap-10 md:gap-20">
        <div>
          <small className="mr-4">Your Donation</small>
          <span className="bg-[#00C49F] w-8 h-2 inline-block"></span>
        </div>
        <div >
          <small className="mr-4">Total Donation</small>
          <span className="bg-[#FF444A] w-8 h-2 inline-block"></span>
        </div>
      </div>
    </>
  );
};

export default PiChart;
