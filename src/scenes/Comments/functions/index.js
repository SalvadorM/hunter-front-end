import axios from '../../../utilities/axios'

export const getPostComments = async (postId) => {
    let url = `/comment/postcomments/${postId}`
    return axios.get(url)
}

export const postComment = async (comment) => {
    let url = `/comment/new`
    return axios.post(url, comment)
}