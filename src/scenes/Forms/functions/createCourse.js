import axios from '../../../utilities/axios'

/*  
@@PARAMS
    @classCode
    @className
    @season
    @year
    @information
    @section

@@addNewUserCourse
    adds a new course to the usercourse table, if new creates a new course 

*/
export const addNewUserCourse = async (course) => {
    return axios.post('/class/add',course)
}



/*
@@params
    @courseId

@@deleteUserCourse
    deletes a course in usercourse 
*/
export const deleteUserCourse = async (courseId) => {
    const url = `/delete/${courseId}`
    return axios.delete(url)
}   