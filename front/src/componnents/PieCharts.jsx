import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from "recharts";
export default function PieCharts({datas}) {
    const prct = Number(datas)*100
    const data = [
      { name: "TodayScore", value: Number(datas) },
      { name: "Resume", value: (1 - datas) }
    ]
    const COLORS = ["#FF0000", "#FBFBFB"];

    const CustomLabel = () => {
      return (
        <p className="PieContainer__item">
          <span className="PieContainer__item__prct">{`${prct}%`}</span>
          <span className="PieContainer__item__text">de votre objectif</span>
        </p>
      )
    }
    const CustomTitle = () => {
      return (
        <h6 className="PieContainer_title">
          Score
        </h6>
      )
    }

    return (
      <>
          <CustomTitle />
        <ResponsiveContainer width={258} height="100%" className="PieContainer">
          <CustomLabel/>
          <PieChart margin={{ top: 10, right: 0, left: -10, bottom: 10 }} className="PieContainer_pieCharts">
            <Pie
              data={data}
              dataKey="value"
              cx={140}
              cy="50%"
              innerRadius={0}
              outerRadius={81}
              isAnimationActive={true}
            >
              {data.map((entry, index) => {
                return <Cell key={`cell-${index}`} fill="#FFF" stroke="#FFF" />;
              })}
              {/* <Label
                value={`${prct}%\n de votre objectif`}
                className="pieChartsLabel"
                position="center"
                fill="black"
                style={{
                  fontSize: "12px",
                  fontWeight: "normal",
                  fontFamily: "Roboto",
                }}
              /> */}
            </Pie>
            <Pie
            data={data}
            cx={140}
            cy="50%"
            startAngle={-180}
            endAngle={-580}
            innerRadius={65}
            outerRadius={81}
            dataKey="value"
            isAnimationActive={true}
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
        </>
      )
  }