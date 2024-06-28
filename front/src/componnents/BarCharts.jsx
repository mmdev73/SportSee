import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const BarCharts = ({datas}) => {
    const customLegend = () => {
        return (
            <div className="barchart__legend">
                <h2 className="barchart__legend__title">Activité quotidienne</h2>
                <div className="barchart__legend__container">
                    <div className="barchart__legend__container__data barchart__legend__data-1">
                        <span className="barchart__legend__container__data__icon"><img src="/icons/black_dot.svg" alt="" className="barchart__legend__container__data__icon__img" /></span>
                        <span className="barchart__legend__container__data__text">Poids (kg)</span>
                    </div>
                    <div className="barchart__legend__container__data legend__data-2">
                        <span className="barchart__legend__container__data__icon"><img src="/icons/red_dot.svg" alt="" className="barchart__legend__container__data__icon__img" /></span>
                        <span className="barchart__legend__container__data__text">Calories brulées (kCal)</span>
                    </div>
                </div>
            </div>
        )
    }

    function customTooltip({ payload, label, active }) {
        if (active) {
          return (
            <div className="barchart__customTooltip">
              <p className="barchart__customTooltiplabel">{`${payload[0].value}kg`}</p>
              <p className="barchart__customTooltiplabel">{`${payload[1].value}kCal`}</p>
            </div>
          );
        }
      
        return null;
      }

    return (
            <BarChart height={228} width={800} data={datas} className="BarCharts_Container">
                <CartesianGrid strokeDasharray="3 3"  strokeDashoffset={50}/>
                <XAxis dataKey="name" />
                <YAxis  yAxisId='right' orientation='right' dataKey="kg" domain={["dataMin - 10", "dataMax + 5"]}/>
                <YAxis  yAxisId='left' orientation='left' dataKey="cal" domain={["dataMin - 50", "dataMax + 10"]} tick={false}/>
                <Tooltip content={customTooltip}/>
                <Legend wrapperStyle={{ top: -40, right: 0}} width="100%" content={customLegend}/>
                <Bar dataKey="kg" yAxisId='right' fill="#000" barSize={10} radius={10} />
                <Bar dataKey="cal" yAxisId='left' fill="#E60000" barSize={10} radius={10}/>
            </BarChart> 
    )
}

export default BarCharts
