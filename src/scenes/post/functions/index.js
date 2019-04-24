import axios from '../../../utilities/axios'

export const createNewClassPost = async (postInfo) => {
    let url = `/post/new`
    return axios.post(url, postInfo)
}


export const getClassPosts = async (classCode) => {
    let url = `/post/courseposts/${classCode}`
    return axios.get(url)
}


export const getPostById = async (postId) => {
    let url = `/post/${postId}`
    return axios.get(url)
}

export const getUserPostByUserId = async (userId) => {
    let url = `/post/userposts/${userId}`
    return axios.get(url)
}