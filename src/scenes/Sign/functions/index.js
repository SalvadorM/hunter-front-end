import Axios from '../../../utilities/axios'

export const userLogin = (user) => {
    return Axios.post('/user/login', user, )
}

export const userLogOut = () => {
    return Axios.post('/user/logout')
}

export const createUserAccount = (userAccountInfo) => {
    return Axios.post('/user/create', userAccountInfo)
}