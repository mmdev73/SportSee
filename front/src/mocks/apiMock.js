import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} from './datas'
let mock;

if (import.meta.env.VITE_USE_MOCK_DATA === "true") {
    mock = new MockAdapter(axios)
    mock.onGet('http://localhost:3000/user/12').reply(200, {
        data: USER_MAIN_DATA.filter(user => user.id === 12).shift()
    });

    mock.onGet('http://localhost:3000/user/12/activity').reply(200, {
        data: USER_ACTIVITY.filter(userActivity => userActivity.userId === 12).shift()
    });

    mock.onGet('http://localhost:3000/user/12/average-sessions').reply(200, {
        data: USER_AVERAGE_SESSIONS.filter(userAverageSessions => userAverageSessions.userId === 12).shift()
    });

    mock.onGet('http://localhost:3000/user/12/performance').reply(200, {
        data: USER_PERFORMANCE.filter(userPerformance => userPerformance.userId === 12).shift()
    });

    mock.onGet('http://localhost:3000/user/18').reply(200, {
        data: USER_MAIN_DATA.filter(user => user.id === 18).shift()
    });

    mock.onGet('http://localhost:3000/user/18/activity').reply(200, {
        data: USER_ACTIVITY.filter(userActivity => userActivity.userId === 18).shift()
    });

    mock.onGet('http://localhost:3000/user/18/average-sessions').reply(200, {
        data: USER_AVERAGE_SESSIONS.filter(userAverageSessions => userAverageSessions.userId === 18).shift()
    });

    mock.onGet('http://localhost:3000/user/18/performance').reply(200, {
        data: USER_PERFORMANCE.filter(userPerformance => userPerformance.userId === 18).shift()
    });
}


export default axios;