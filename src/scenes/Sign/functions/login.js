import axios from '../../../utilities/axios'


module.exports = test = (user) => {

    return axios.get('/user/all')
}