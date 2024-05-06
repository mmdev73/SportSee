import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

const RadarCharts = ({datas}) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={datas}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind"tick={{ fill: "white", fontSize: 10 }}/>
            <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      )
}

export default RadarCharts