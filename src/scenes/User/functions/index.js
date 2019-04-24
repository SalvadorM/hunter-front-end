import axios from '../../../utilities/axios'


export const getProfileInfo = async (profileId) => {
    let url =  `/user/find/${profileId}`

    return axios.get(url)
}