import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const BarCharts = ({datas}) => {
    const formatedData = []
    for(let i = 0; i < datas.length; i++){
        const obj = {
            name: i + 1,
            kg: datas[i].kilogram,
            cal: datas[i].calories,
            d: datas[i].day
        }
        formatedData.push(obj)
    }

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
            <BarChart height={228} width={800} data={formatedData} className="BarCharts_Container">
                <CartesianGrid strokeDasharray="3 3"  strokeDashoffset={50}/>
                <XAxis dataKey="name" />
                <YAxis  orientation='right'/>
                <Tooltip content={customTooltip}/>
                <Legend wrapperStyle={{ top: -40, right: 0}} width="100%" content={customLegend}/>
                <Bar dataKey="kg" fill="#000" barSize={10} radius={10} b/>
                <Bar dataKey="cal" fill="#E60000" barSize={10} radius={10}/>
            </BarChart> 
    )
}

export default BarCharts
