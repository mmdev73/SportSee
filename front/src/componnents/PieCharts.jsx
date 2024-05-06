import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from "recharts";
export default function PieCharts({datas}) {
    const prct = Number(datas)*100
    const data = [
      { name: "TodayScore", value: Number(datas) },
      { name: "Resume", value: (1 - datas) }
    ]
    const COLORS = ["#FF0000", "#FBFBFB"];

    const customLabel = () => {
      return (
        <p>
          <span>{`${prct}%`}</span>
          <span>de votre objectif</span>
        </p>
      )
    }

    return (
        <ResponsiveContainer width={258} height="100%">
          <PieChart margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <Pie
              data={data}
              dataKey="value"
              cx={140}
              cy="50%"
              innerRadius={0}
              outerRadius={80}
              isAnimationActive={false}
            >
              {data.map((entry, index) => {
                return <Cell key={`cell-${index}`} fill="#FFF" stroke="#FBFBFB" />;
              })}
              <Label
                value={`${prct}% de votre objectif`}
                className="pieChartsLabel"
                position="center"
                fill="black"
                style={{
                  fontSize: "12px",
                  fontWeight: "normal",
                  fontFamily: "Roboto",
                }}
              />
            </Pie>
            <Pie
            data={data}
            cx={140}
            cy="50%"
            startAngle={-180}
            endAngle={-580}
            innerRadius={65}
            outerRadius={80}
            dataKey="value"
          >   
            {data.map((entry, index) => {
              if (index === 0) {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    cornerRadius={10}
                  />
                );
              }
              return (
                <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                cornerRadius={index == 0 ? 10 : 0}
              />
              );
            })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      );
  }