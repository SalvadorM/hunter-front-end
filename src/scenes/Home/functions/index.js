import axios from '../../../utilities/axios'


export const getCurrentClasses = async (season, year) => {

    let api_url = `/usercourse/userclasses/?season=${season}&year=${year}`
    return axios.get(api_url)
}


export const getUserPostsByUserId = async (userId) => {

}

export const getUserCommentsByUserId = async (userId) => {

}
