import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const SimpleLineCharts = ({datas}) => {
    const getDay = (day) => {
        switch (day){
            case 1:
                return "L"
            case 2:
                return "M"
            case 3:
                return "M"
            case 4:
                return "J"
            case 5:
                return "V"
            case 6:
                return "S"
            case 7:
                return "D"
            default:
                return"DEFAULT"
        }
    }
    const formatedData = []
    for(let i = 0; i < datas.length; i++){
        const obj = {
            dayOrigin: datas[i].day,
            day: getDay(datas[i].day),
            sessionLength: datas[i].sessionLength
        }
        formatedData.push(obj)
    }

    const renderTooltip = ({ payload, label, active }) => {
        if(active){
            return (
                <div className="line__tooltip">
                    <div className="line__tooltip__payload">
                        {`${payload[0].payload.sessionLength}min`}
                    </div>
                </div>
            )
        }
        return null
    }
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width="100%"
              height="100%"
              data={formatedData}
              margin={{
                top: 10,
                right: 10,
                left: 10,
                bottom: 10,
              }}
            >
              <XAxis 
                dataKey="day"
                tick={{fill:"#FFF"}}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip 
              cursor={false}
              content={renderTooltip}
              />
              <Line
                type="monotone"
                dataKey="sessionLength"
                stroke="#FFF"
                dot={false}
                activeDot={{ stroke: 'rgb(255,255,255,0.4)', strokeWidth: 8, r: 4 }}
              />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default SimpleLineCharts