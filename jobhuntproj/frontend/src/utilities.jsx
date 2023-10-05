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
    referral_email
  ) => {
    try {
      // Validation: Check if required fields are filled
    //   if (!company || !role || !date_applied) {
    //     throw new Error("Company, Role, and Date applied are required fields.");
    //   }

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