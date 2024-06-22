import { useParams } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react";
import Info from "../componnents/Info";
import PieCharts from "../componnents/PieCharts";
import BarCharts from "../componnents/BarCharts";
import SimpleLineCharts from "../componnents/SimpleLineCharts";
import RadarCharts from "../componnents/RadarChart";

const API_ENV = 'https://apisportsee.dev73.fr/user/'
const API_ENV_DEV = 'http://localhost:3000/user/'
let URL = ''
const isOnline = false
if(isOnline){
    URL = API_ENV_DEV
} else {
    URL = API_ENV_DEV
}
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

    const formatData = (data, type) => {
        const formatedData = []
        for(let i = data.length - 1; i >= 0; i--){
            let obj = {}
            if(type === "performance"){
                obj = {
                    value: data[i].value,
                    kind: getKindStr(data[i].kind)
                }                
            }

            if(type === "averageSessions"){
                obj = {
                    dayOrigin: data[i].day,
                    day: getDay(data[i].day),
                    sessionLength: data[i].sessionLength
                }
            }
            formatedData.push(obj)
        }
        return formatedData
    }
    const [userInfos,setUserInfos] = useState({})
    const [todayScore, setTodayScore] = useState(0)
    const [keyData, setKeyData] = useState({})
    const [activity, setActivity] = useState({})
    const [averageSession, setAverageSession] = useState({})
    const [performance, setPerformance] = useState({})
     

    useEffect(() => {
        const fetchUserInfos = async () => {
            const res = await axios.get(URL+ userIdParam)
            const {userInfos, todayScore, score, keyData} = res.data.data
            return {userInfos, todayScore, score, keyData}
        }
        const fetchUserActivity = async () => {
            const res = await axios.get(URL + userIdParam + '/activity')
            const { sessions } = res.data.data
            return sessions
        }
        const fetchAverageSessions = async () => {
            let url = ''
            if(isOnline){
                url = API_ENV + userIdParam + '/average-sessions'
            } else {
                url = API_ENV_DEV + userIdParam + '/average-sessions'
            }
            const res = await axios.get(url)
            const { sessions } = res.data.data
            return sessions
        }
        const fetchPerformance = async () => {
            let url = ''
            if(isOnline){
                url = API_ENV + userIdParam + '/performance'
            } else {
                url = API_ENV_DEV + userIdParam + '/performance'
            }
            const res = await axios.get(url)
            const { data } = res.data.data
            return data
        }
        Promise.all([fetchUserInfos(), fetchUserActivity(), fetchAverageSessions(), fetchPerformance()])
            .then(([{userInfos, todayScore, score, keyData}, activity, averageSession, performance]) => {
                setUserInfos(userInfos)
                setTodayScore(todayScore ? todayScore : score)
                setKeyData(keyData)
                setActivity(activity)
                setAverageSession(formatData(averageSession, "averageSessions"))
                setPerformance(formatData(performance, "performance"))
            })
            .catch(error => console.log(error))
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