import axios from '../../../utilities/axios'


export const userLogin = (user) => {
    return axios.post('/user/login', user)
}

export const userLogOut = () => {
    return axios.post('/user/logout')
}

export const createUserAccount = (userAccountInfo) => {
    return axios.post('/user/create', userAccountInfo)
}