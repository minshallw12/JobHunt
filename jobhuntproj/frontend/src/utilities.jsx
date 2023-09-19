import axios from 'axios'

export const getApplications = async() => {
    let response = await axios.get("/getapplications/")
    return response.data.applications
}