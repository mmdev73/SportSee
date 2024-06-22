import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'

const RadarCharts = ({datas}) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={datas}>
            <PolarGrid radialLines={false}/>
            <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 10 }}/>
            <Radar dataKey="value" fill="#FF0000" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      )
}

export default RadarCharts