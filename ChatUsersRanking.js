//import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { PureComponent } from 'react';





import {

  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
export default function Chart(){
  const data = [
    { name: "juan", chats: 20 },
    { name: "Maria", chats: 15 },
    { name: "Pedro", chats: 10 },
    { name: "Diego", chats: 50 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Personas con mas chats</h1>
      <div className="App">

        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="chats" fill="rgb(38, 221, 21)" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
 



}