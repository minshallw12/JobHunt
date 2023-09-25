import { useState, useEffect } from "react";
import { editEntry } from "../utilities";
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function EditForm() {
    const { id } = useParams()
    const [company, setCompany] = useState(null);
    const [role, setRole] = useState(null)
    const [date_applied, setDateApplied] = useState(null)
    const [req_number, setReqNumber] = useState(null)
    const [recruiter, setRecruiter] = useState(null)
    const [recruiter_email, setRecruiterEmail] = useState(null)
    const [referral, setReferral] = useState(null)
    const [referral_email, setReferralEmail] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Call editEntry with id and other data
        const success = await editEntry(
          id, // Use the 'id' from the URL
          company,
          role,
          date_applied,
          req_number,
          recruiter,
          recruiter_email,
          referral,
          referral_email
        );
    
        // Handle success or error here
        if (success) {
          // Optionally, you can clear the form fields here
          setCompany("");
          setRole("");
          setDateApplied("");
          setReqNumber("");
          setRecruiter("");
          setRecruiterEmail("");
          setReferral("");
          setReferralEmail("");
        } else {
          console.error("Edit request failed");
        }
      };
      

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className="entryForm">
                    <div className="entryContainer">
                        <div className="entryColumn">
                            <label for="company">Company</label>
                            <input type="text" id="company" name="company" onChange={(event) => setCompany(event.target.value)}/>
                            <label for="role">Role</label>
                            <input type="text" id="role" name="role" onChange={(event) => setRole(event.target.value)}/>
                            <label for="date_applied">Date applied</label>
                            <input type="date" id="date_applied" name="date_applied" onChange={(event) => setDateApplied(event.target.value)}/>
                            <label for="req_number">Req#</label>
                            <input type="text" id="req_number" name="req_number" onChange={(event) => setReqNumber(event.target.value)}/>
                        </div>
                        <div className="entryColumn">
                            <label for="recruiter">Recruiter</label>
                            <input type="text" id="recruiter" name="rectuiter" onChange={(event) => setRecruiter(event.target.value)}/>
                            <label for="recruiter_email">Recruiter Email</label>
                            <input type="text" id="rectuiter_email" name="rectuiter_email" onChange={(event) => setRecruiterEmail(event.target.value)}/>
                            <label for="referral">Referral Name</label>
                            <input type="text" id="referral" name="referral" onChange={(event) => setReferral(event.target.value)}/>
                            <label for="referral_email">Referral Email</label>
                            <input type="text" id="referral_email" name="referral_email" onChange={(event) => setReferralEmail(event.target.value)}/>
                        </div>
                    </div>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}