import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceLine,
  Line,
  Tooltip
} from "recharts";
import { Typography } from "@material-ui/core";

const LineChartComponent = props => {
  let height = props.height || 400;
  let data = props.data || [];
  let xAxis = props.xAxis || "name";
  let yAxis = props.yAxis || [];
  let colors = props.colors || [];

  if(props.loading){
    return (
      <Typography>Loading...</Typography>
    )
  }
  if(!data.length){
    return (
      <Typography>No Data available</Typography>
    )
  }
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey={xAxis} />
        <YAxis />
        <Tooltip cursor={{ fill: "transparent" }} />
        <ReferenceLine y={0} strokeWidth={2} stroke="#b3b3b3" />
        {yAxis.map((k, i) => (
          <Line
            dataKey={k}
            key={i}
            type="natural"
            strokeWidth={3}
            stroke={colors[i] || "#747BF3"}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
