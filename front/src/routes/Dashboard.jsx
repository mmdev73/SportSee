import { useParams } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react";
import Info from "../componnents/Info";
import PieCharts from "../componnents/PieCharts";
import BarCharts from "../componnents/BarCharts";
const Dashboard = () => {
    let { userIdParam } = useParams();
    //const userInfosData = axios.get(`http://localhost:3000/user/${id}`)
    //.then(res => {
    //    return res.data.data
    //})
    //.catch(err => {
    //    console.log(err)
    //})

    const [userInfos,setUserInfos] = useState({})
    const [todayScore, setTodayScore] = useState(0)
    const [keyData, setKeyData] = useState({})
    const [activity, setActivity] = useState({})
     

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
                            <div className="dashboard__resume__charts__small">
                                <PieCharts datas={todayScore}/>
                            </div>
                            <div className="dashboard__resume__charts__small">
                                <PieCharts datas={todayScore}/>
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