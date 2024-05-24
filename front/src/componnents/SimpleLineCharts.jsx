import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';

const SimpleLineCharts = ({datas}) => {
    
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
const CustomCursor = (props) => {
    const points = props.points[0]
    const width = props.width
    const height = props.height
    const x = points.x
    const y = points.y
    return (
      <Rectangle
        fill="#000000"
        opacity={0.1}
        x={x}
        y={y - 10}
        width={width}
        height={height + 50}
      />
    )
}

    const CustomTitle = () => {
        return (
            <h6 className='LineCharts_Title'>
                Durée moyenne des sessions
            </h6>
        )
    }
    return (
        <>
        <CustomTitle />
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width="100%"
              height="100%"
              data={datas}
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
              {/* <Wrapper dataKey="day" tick={{fill:"#FFF"}}/> */}
              <Tooltip 
              cursor={<CustomCursor/>}
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
        </>
    )
}

export default SimpleLineCharts

//const Wrapper = ({ dataKey, tick, tickLine = false, axisLine = false }) => {
//    const defaultValues = useMemo(
//      () => ({ dataKey: getParamFromDom('dataKey'), tick: getParamFromDom('tick'), tickLine: getParamFromDom('tickLine'), axisLine: getParamFromDom('axisLine')}),
//      []
//    )
//    return <XAxis 
//    dataKey={dataKey || defaultValues.dataKey}
//    tick={tick || defaultValues.tick}
//    tickLine={tickLine || defaultValues.tickLine}
//    axisLine={axisLine || defaultValues.axisLine}
//  />
//}

//const error = console.error
//console.error = (...args) => {
//  if (/defaultProps/.test(args[0])) return
//  error(...args)
//}