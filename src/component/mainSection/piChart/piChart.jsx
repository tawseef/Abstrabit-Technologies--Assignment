import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Pizza", "Popularity"],
  ["Bajaj Finserv", 25000],
  ["Shriram Finance", 40000],
  ["Mahindra Finance", 20000],
  ["Utkarsh Small Finance Bank", 15000],
];

export const options = {
  title: "Your FD Portfolio",
  sliceVisibilityThreshold: 0.2, // 20%
};

export function PiChart() {
  return (
    <>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"398px"}
        height={"286px"}
      />
    </>
  );
}

// export default piChart;
