import { useState } from "react";
import { addEntry } from '../utilities';

export default function HomePage() {
    const [company, setCompany] = useState(null);
    const [role, setRole] = useState(null)
    const [date_applied, setDateApplied] = useState(null)
    const [req_number, setReqNumber] = useState(null)
    const [recruiter, setRecruiter] = useState(null)
    const [recruiter_email, setRecruiterEmail] = useState(null)
    const [referral, setReferral] = useState(null)
    const [referral_email, setReferralEmail] = useState(null)

    return (
        <div>
            <h1>This is my Jobhunt App test</h1>


            <h3>Add an entry here:</h3>
            <form onSubmit={(event) => [
                event.preventDefault(),
                addEntry(
                    company,
                    role,
                    date_applied,
                    req_number,
                    recruiter,
                    recruiter_email,
                    referral,
                    referral_email
                ),
                setCompany(""),
                setRole(""),
                setDateApplied(""),
                setReqNumber(""),
                setRecruiter(""),
                setRecruiterEmail(""),
                setReferral(""),
                setReferralEmail(""),
            ]}>

                <label for="company">Company</label>
                <input type="text" id="company" name="company" onChange={(event) => setCompany(event.target.value)}/>
                <label for="role">Role</label>
                <input type="text" id="role" name="role" onChange={(event) => setRole(event.target.value)}/>
                <label for="date_applied">Date applied</label>
                <input type="date" id="date_applied" name="date_applied" onChange={(event) => setDateApplied(event.target.value)}/>
                <label for="req_number">Req#</label>
                <input type="text" id="req_number" name="req_number" onChange={(event) => setReqNumber(event.target.value)}/>
                <label for="recruiter">Recruiter</label>
                <input type="text" id="recruiter" name="rectuiter" onChange={(event) => setRecruiter(event.target.value)}/>
                <label for="recruiter_email">Recruiter Email</label>
                <input type="text" id="rectuiter_email" name="rectuiter_email" onChange={(event) => setRecruiterEmail(event.target.value)}/>
                <label for="referral">Referral Name</label>
                <input type="text" id="referral" name="referral" onChange={(event) => setReferral(event.target.value)}/>
                <label for="referral_email">Referral Email</label>
                <input type="text" id="referral_email" name="referral_email" onChange={(event) => setReferralEmail(event.target.value)}/>
                <button type="submit">Submit entry</button>
            </form>


        </div>
    )
}