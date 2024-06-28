import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Info from "../componnents/Info"
import PieCharts from "../componnents/PieCharts"
import BarCharts from "../componnents/BarCharts"
import SimpleLineCharts from "../componnents/SimpleLineCharts"
import RadarCharts from "../componnents/RadarChart"
import { fetchUserInfos, fetchUserActivity, fetchAverageSessions, fetchPerformance } from "../Utils/dataFetching"
import Error from "./Error"


const Dashboard = () => {
    let { userIdParam } = useParams()
    const [userInfos, setUserInfos] = useState({})
    const [todayScore, setTodayScore] = useState(0)
    const [keyData, setKeyData] = useState({})
    const [activity, setActivity] = useState({})
    const [averageSession, setAverageSession] = useState({})
    const [performance, setPerformance] = useState({})

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async (userIdParam) => {
        setIsLoading(true)
        try {
            const [{ userInfos, tdScore, keyData }, activity, averageSession, performance] = await Promise.all([
                fetchUserInfos(userIdParam),
                fetchUserActivity(userIdParam),
                fetchAverageSessions(userIdParam),
                fetchPerformance(userIdParam)
            ])
            setUserInfos(userInfos)
            setTodayScore(tdScore)
            setKeyData(keyData)
            setActivity(activity)
            setAverageSession(averageSession)
            setPerformance(performance)
        } catch (error) {
            if (error) {
                const errNo = error.code === "ERR_NETWORK" ? 500 : error.response.status ? error.response.status : 404
                setError({
                    status: errNo,
                    message: error.message
                })
            }
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchData(userIdParam)
    }, [])
    return (
        <>

            {error && <Error status={error.status} message={error.message} />}
            {!error && <div className="dashboard__container">
                {isLoading && <div>Loading...</div>}
                {!isLoading && <div className="dashboard">
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
                                <BarCharts datas={activity} />
                            </div>
                            <div className="dashboard__resume__charts__small dashboard__resume__charts__small--red">
                                <SimpleLineCharts datas={averageSession} />
                            </div>
                            <div className="dashboard__resume__charts__small dashboard__resume__charts__small--black">
                                <RadarCharts datas={performance} />
                            </div>
                            <div className="dashboard__resume__charts__small">
                                <PieCharts datas={todayScore} />
                            </div>
                        </div>
                        <div className="dashboard__resume__infos">
                            <Info className="info__icon bg--red" icon={'energy'} iconAlt={'energy'} value={keyData.calorieCount ? keyData.calorieCount + 'kCal' : '0kCal'} unit={'Calories'} />
                            <Info className="info__icon bg--blue" icon={'chicken'} iconAlt={'chicken'} value={keyData.proteinCount ? keyData.proteinCount + 'g' : '0g'} unit={'Protéines'} />
                            <Info className="info__icon bg--yellow" icon={'apple'} iconAlt={'apple'} value={keyData.carbohydrateCount ? keyData.carbohydrateCount + 'g' : '0g'} unit={'Glucides'} />
                            <Info className="info__icon bg--pink" icon={'cheeseburger'} iconAlt={'cheeseburger'} value={keyData.lipidCount ? keyData.lipidCount + 'g' : '0g'} unit={'Lipides'} />
                        </div>
                    </div>
                </div>
                }
            </div>
            }
        </>
    )
}

export default Dashboard