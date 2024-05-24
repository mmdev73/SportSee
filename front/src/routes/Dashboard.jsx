import { useParams } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react";
import Info from "../componnents/Info";
import PieCharts from "../componnents/PieCharts";
import BarCharts from "../componnents/BarCharts";
import SimpleLineCharts from "../componnents/SimpleLineCharts";
import RadarCharts from "../componnents/RadarChart";
const Dashboard = () => {
    let { userIdParam } = useParams();
    
    const getKindStr = (kind) => {
        switch (kind){
            case 1:
                return "Cardio"
            case 2:
                return "Énergie"
            case 3:
                return "Endurance"
            case 4:
                return "Force"
            case 5:
                return "Vitesse"
            case 6:
                return "Intensité"
            default:
                return ""
        }
    }

    const [userInfos,setUserInfos] = useState({})
    const [todayScore, setTodayScore] = useState(0)
    const [keyData, setKeyData] = useState({})
    const [activity, setActivity] = useState({})
    const [averageSession, setAverageSession] = useState({})
    const [performance, setPerformance] = useState({})
     

    useEffect(() => {
        const fetchUserInfos = async () => {
            const res = await axios.get(`http://localhost:3000/user/${userIdParam}`)
            const {userInfos, todayScore, score, keyData} = res.data.data
            setUserInfos(userInfos)
            setTodayScore(todayScore ? todayScore : score)
            setKeyData(keyData)
        }
        fetchUserInfos()
        const fetchUserActivity = async () => {
            const res = await axios.get(`http://localhost:3000/user/${userIdParam}/activity`)
            const { sessions } = res.data.data
            setActivity(sessions)
        }
        fetchUserActivity()
        const fetchAverageSessions = async () => {
            const res = await axios.get(`http://localhost:3000/user/${userIdParam}/average-sessions`)
            const { sessions } = res.data.data
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
            for(let i = 0; i < sessions.length; i++){
                const obj = {
                    dayOrigin: sessions[i].day,
                    day: getDay(sessions[i].day),
                    sessionLength: sessions[i].sessionLength
                }
                formatedData.push(obj)
            }
            setAverageSession(formatedData)
        }
        fetchAverageSessions()
        const fetchPerformance = async () => {
            const res = await axios.get(`http://localhost:3000/user/${userIdParam}/performance`)
            const { data } = res.data.data
            const formatedData = []
            for(let i = data.length - 1; i >= 0; i--){
                const obj = {
                    value: data[i].value,
                    kind: getKindStr(data[i].kind)
                }
                formatedData.push(obj)
            }
            setPerformance(formatedData)
        }
        fetchPerformance()
    },[])

    return (
        <>
            <div className="dashboard__container">
                <div className="dashboard">
                    <h1 className="dashboard__title">
                        Bonjour&nbsp;
                        <span className="dashboard__title__username">
                            {userInfos.firstName ? userInfos.firstName : "No data found"}
                        </span>
                    </h1>
                    <h2 className="dashboard__subtitle">Félicitation ! Vous avez explosé vos objectifs hier</h2>
                    <div className="dashboard__resume">
                        <div className="dashboard__resume__charts">
                            <div className="dashboard__resume__charts__large">
                                <BarCharts datas={activity}/>
                            </div>
                            <div className="dashboard__resume__charts__small dashboard__resume__charts__small--red">
                                <SimpleLineCharts datas={averageSession} />
                            </div>
                            <div className="dashboard__resume__charts__small dashboard__resume__charts__small--black">
                                <RadarCharts datas={performance}/>
                            </div>
                            <div className="dashboard__resume__charts__small">
                                <PieCharts datas={todayScore}/>
                            </div>
                        </div>
                        <div className="dashboard__resume__infos">
                            <Info className="info__icon bg--red" icon={'energy'} iconAlt={'energy'} value={keyData.calorieCount ? keyData.calorieCount + 'kCal' : '0kCal'} unit={'Calories'}/>
                            <Info className="info__icon bg--blue" icon={'chicken'} iconAlt={'chicken'} value={keyData.proteinCount ? keyData.proteinCount + 'g' : '0g'} unit={'Protéines'}/>
                            <Info className="info__icon bg--yellow" icon={'apple'} iconAlt={'apple'} value={keyData.carbohydrateCount ? keyData.carbohydrateCount + 'g' : '0g'} unit={'Glucides'}/>
                            <Info className="info__icon bg--pink" icon={'cheeseburger'} iconAlt={'cheeseburger'} value={keyData.lipidCount ? keyData.lipidCount + 'g' : '0g'} unit={'Lipides'}/>
                        </div>
                    </div>
                    

                </div> 
            </div>
        </>
    )
}

export default Dashboard