//import axios from 'axios'
import axios from '../mocks/apiMock'
import { formatData } from './formatDatas'


const apiUrl = import.meta.env.VITE_API_URL
export const fetchUserInfos = async (userIdParam) => {
    const res = await axios.get(apiUrl + userIdParam);
    const {userInfos, todayScore, score, keyData} = res.data.data
    const tdScore = todayScore ? todayScore : score
    return {userInfos, tdScore, keyData}
}
export const fetchUserActivity = async (userIdParam) => {
    const res = await axios.get(apiUrl + userIdParam + '/activity')    
    const { sessions } = res.data.data  
    const formatedData = formatData(sessions, "activities")
    return formatedData
}
export const fetchAverageSessions = async (userIdParam) => {
    const res = await axios.get(apiUrl + userIdParam + '/average-sessions')
    const { sessions } = res.data.data
    const formatedData = formatData(sessions, "averageSessions")
    return formatedData
}
export const fetchPerformance = async (userIdParam) => {
    const res = await axios.get(apiUrl + userIdParam + '/performance')
    const { data } = res.data.data
    const formatedData = formatData(data, "performance")
    return formatedData
}
