import axios from 'axios';

// Create
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

// Read
export const getApplications = async() => {
    let response = await axios.get("/getapplications/")
    return response.data.applications
}

export const getApplicationDetails = async(id) => {
    let response = await axios.get(`/application/${id.params.id}`)
    console.log(response.data)
    return response.data.data
}

// Update
export const increment = async(id, followed_up) => {
    console.log(id)
    let response = await axios.put(`/increment/${id.id}`, {'followed_up':followed_up})
    console.log(response.data)
    return response.data
}

export const decrement = async(id, followed_up) => {
    console.log(id)
    let response = await axios.put(`/decrement/${id.id}`, {'followed_up':followed_up})
    console.log(response.data)
    return response.data
}

export const editCompany = async(id, company) => {
    console.log(id)
    console.log(company)
    let response = await axios.put(`/editcompany/${id}`, {
        'company': company,
    })
    console.log(response.data.success)
    return response.data.success
}
export const editRole = async(id, role) => {
    console.log(id)
    console.log(role)
    let response = await axios.put(`/editrole/${id}`, {
        'role': role,
    })
    console.log(response.data.success)
    return response.data.success
}
export const editDate = async(id, date_applied) => {
    console.log(id)
    console.log(date_applied)
    let response = await axios.put(`/editdate/${id}`, {
        'date_applied': date_applied,
    })
    console.log(response.data.success)
    return response.data.success
}
export const editReq = async(id, req_number) => {
    console.log(id)
    console.log(req_number)
    let response = await axios.put(`/editreq/${id}`, {
        'req_number': req_number,
    })
    console.log(response.data.success)
    return response.data.success
}
export const editRejected = async(id, rejected) => {
    console.log(id)
    console.log(rejected)
    let response = await axios.put(`/editrejected/${id}`, {
        'rejected': rejected,
    })
    console.log(response.data.success)
    return response.data.success
}
export const editRecruiter = async(id, recruiter) => {
    console.log(id)
    console.log(recruiter)
    let response = await axios.put(`/editrecruiter/${id}`, {
        'recruiter': recruiter,
    })
    console.log(response.data.success)
    return response.data.success
}
export const editRecruiterEmail = async(id, recruiter_email) => {
    console.log(id)
    console.log(recruiter_email)
    let response = await axios.put(`/editrecruiteremail/${id}`, {
        'recruiter_email': recruiter_email,
    })
    console.log(response.data.success)
    return response.data.success
}
export const editReferral = async(id, referral) => {
    console.log(id)
    console.log(referral)
    let response = await axios.put(`/editreferral/${id}`, {
        'referral': referral,
    })
    console.log(response.data.success)
    return response.data.success
}
export const editReferralEmail = async(id, referral_email) => {
    console.log(id)
    console.log(referral_email)
    let response = await axios.put(`/editreferralemail/${id}`, {
        'referral_email': referral_email,
    })
    console.log(response.data.success)
    return response.data.success
}

// Delete
export const deleteApplication = async(id) => {
    console.log(id)
    let response = await axios.delete(`/deleteapplication/${id.id}`)
    console.log(response.data)
    return response.data
}