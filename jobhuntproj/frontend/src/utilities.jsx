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
};

export const getApplicationDetails = async(id) => {
    let response = await axios.get(`/application/${id.params.id}`)
    console.log(response.data)
    return response.data.data
};

// Update
export const followUp = async(id, direction, followed_up) => {
    try {
        const response = await axios.put(`/${direction}/${id.id}`, {'followed_up':followed_up})
        return response.data.success;
    } catch (error) {
        console.error(`Error updating ${direction}`, error);
        throw error;
    }
};

export const increment = async(id, followed_up) => {
    console.log(id)
    let response = await axios.put(`/increment/${id.id}`, {'followed_up':followed_up})
    console.log(response.data)
    return response.data
};

export const decrement = async(id, followed_up) => {
    console.log(id)
    let response = await axios.put(`/decrement/${id.id}`, {'followed_up':followed_up})
    console.log(response.data)
    return response.data
};

export const updateField = async(id, field, value) => {
    try {
        const response = await axios.put(`/edit${field}/${id}`, {
            [field]: value,
        });
        return response.data.success;
    } catch (error) {
        console.error(`Error updating ${field}`, error);
        throw error;
    }
};


// Delete
export const deleteApplication = async(id) => {
    console.log(id)
    let response = await axios.delete(`/deleteapplication/${id.id}`)
    console.log(response.data)
    return response.data
};