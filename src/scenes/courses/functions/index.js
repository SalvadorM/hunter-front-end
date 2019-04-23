import axios from '../../../utilities/axios'


export const getCourseInformation = async (classcode) => {
    let api_url =  `/class/findclass/${classcode}`
    return axios.get(api_url)
}

export const getCourseStudents = async (classcode, season, year, section) => {
    let api_url = `/usercourse/classmates?year=${year}&season=${season}&classcode=${classcode}&section=${section}`
    return axios.get(api_url)
}