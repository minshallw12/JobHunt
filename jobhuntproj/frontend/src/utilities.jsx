import axios from 'axios'

export const addEntry = async(company, role, date_applied, req_number, recruiter, recruiter_email, referral, referral_email) => {
    let response = await axios.post('/addentry/', {
        'company': company,
        'role': role,
        'date_applied': date_applied,
        'req_number': req_number,
        'recruiter': recruiter,
        'recruiter_email': recruiter_email,
        'referral': referral,
        'referral_email': referral_email
    })
    console.log(response.data.success)
    return response.data.success
}

export const getApplications = async() => {
    let response = await axios.get("/getapplications/")
    return response.data.applications
}

export const getApplicationDetails = async(id) => {
    let response = await axios.get(`/application/${id.params.id}`)
    console.log(response.data)
    return response.data.data
}