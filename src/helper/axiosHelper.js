import axios from 'axios'

const rootAPi = process.env.REACT_APP_ROOTAPI
const userApi = rootAPi + "/user"
const transApi = rootAPi + "/transaction"


const getUserId = () => {
    const userJson = sessionStorage.getItem("user")
    const userObj = JSON.parse(userJson)
    return userObj?._id || null
}

// =========UserApi Section ======

export const postUser = async (userObj) => {
    try {
        const {data} = await axios.post(userApi, userObj)
        return data
    } catch (error) {
        
        return {
            status: "error",
            message: error.message
        }
    }
}

// ========Login User ======
export const loginUser = async (userObj) => {
    try {
        
        const {data} = await axios.post(userApi + "/login", userObj)
        return data
    } catch (error) {
        console.log(error)
        return {
            status: "error",
            message: error.message
        }
    }
}
// ========Transaction User ======
export const postTrans = async (transObj) => {

    try {
        const userId = getUserId()
        if (!userId){
            return {
                status:"error", message:"UserId is not found, Logout and login again"
            }
        }
        const {data} = await axios.post(transApi , transObj, {
            headers:{
                Authorization: userId,
            }
        })
        return data
    } catch (error) {
        
        return {
            status: "error",
            message: error.message
        }
    }
}

export const getTrans = async () => {

    try {
        const userId = getUserId()
        if (!userId){
            return {
                status:"error", message:"UserId is not found, Logout and login again"
            }}
        const {data} = await axios.get(transApi, {
            headers:{
                Authorization: userId,
            }
        })
        return data
    } catch (error) {
        console.log(error)
        return {
            status: "error",
            message: error.message
        }
    }
}

export const deleteTrans = async (idArg) => {

    try {
        const userId = getUserId()
        if (!userId){
            return {
                status:"error", message:"UserId is not found, Logout and login again"
            }
        }
        const {data} = await axios.delete(transApi ,{
            data: idArg,
            headers:{
                Authorization: userId,
            }
        })
        return data
    } catch (error) {
        
        return {
            status: "error",
            message: error.message
        }
    }
}
