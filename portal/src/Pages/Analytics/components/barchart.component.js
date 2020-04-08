import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceLine,
  Bar,
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
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} stackOffset="sign">
        <CartesianGrid vertical={false} />
        <XAxis dataKey={xAxis} />
        <YAxis />
        <Tooltip cursor={{ fill: "transparent" }} />
        <ReferenceLine y={0} strokeWidth={2} stroke="#b3b3b3" />
        {yAxis.map((k, i) => (
          <Bar dataKey={k} fill={colors[i] || "#747BF3"} barSize={30} key={i} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
