import axios from 'axios';

// Create
export const addEntry = async (
    company,
    role,
    date_applied,
    req_number,
    recruiter,
    recruiter_email,
    referral,
    referral_email,
    portal_url
  ) => {
    try {
      if (!company) {
        throw new Error("Company field is required");
      }
      if (!role) {
        throw new Error("Role field is required");
      }
      if (!date_applied) {
        throw new Error("Date applied field is required");
      }
  
      // Make the POST request
      const response = await axios.post("/addentry/", {
        company,
        role,
        date_applied,
        req_number,
        recruiter,
        recruiter_email,
        referral,
        referral_email,
        portal_url
      });
  
      // Check the response for success
      if (response.data.success) {
        return true; // Entry added successfully
      } else {
        throw new Error("Entry could not be added."); // Handle server-side failure
      }
    } catch (error) {
        console.error("Error adding entry:", error.message);

        // Show an alert for the required fields error
        if (error.message === "Company field is required" || "Role field is required" || "Date applied field is required") {
            alert(error.message);
        }

      return false; // Entry addition failed
    }
  };
  

// Read
export const getApplications = async() => {
    let response = await axios.get("/getapplications/")
    return response.data.applications
};

export const getApplicationDetails = async(id) => {
    let response = await axios.get(`/application/${id.params.id}`)
    return response.data.data
};

export const getInterviews = async() => {
    let response = await axios.get("/getinterviews")
    return response.data
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

export const followUpFromList = async(id, direction, followed_up) => {
  try {
      const response = await axios.put(`/${direction}/${id}`, {'followed_up':followed_up})
      if (response.data.success) {
        // If the operation is successful, make an API call to get the updated data
        const updatedDataResponse = await axios.get("/getapplications/");
        const updatedData = updatedDataResponse.data.applications;
        return updatedData;
    } else {
        throw new Error("Follow-up operation failed.");
    }
  } catch (error) {
      console.error(`Error updating ${direction}`, error);
      throw error;
  }
};

export const updateField = async(id, field, value) => {
    try {
        const response = await axios.put(`/editjob/${id}/${field}`, {
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