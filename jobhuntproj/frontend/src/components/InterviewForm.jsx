import { useState } from "react";
import { getInterviews } from "../utilities";

export default function InterviewForm({toggleEntryFlag}) {
    const [company, setCompany] = useState(null);
    const [role, setRole] = useState(null);
    const [recruiter, setRecruiter] = useState(null)
    const [recruiter_email, setRecruiterEmail] = useState(null)

    const handleAddInterview = async () => {
        await addInterview(
            company,
            role,
            recruiter,
            recruiter_email,
        );

        // // Fetch interviews
        // const updatedInterviewList = await getInterviews();

        // Clear form to blanks
        setCompany(""),
        setRole(""),
        setRecruiter(""),
        setRecruiterEmail("")

    };

    return (
        <div className="entryForm">
            <h3 className="center padding">Add an Interview:</h3>
            <form onSubmit={handleAddInterview}>
                <div className="entryContainer column">
                    <label for="company">Company</label>
                    <input type="text" id="company" name="company" onChange={(event) => setCompany(event.target.value)}/>
                    <label for="role">Role</label>
                    <input type="text" id="role" name="role" onChange={(event) => setRole(event.target.value)}/>
                    <label for="recruiter">Recruiter</label>
                    <input type="text" id="recruiter" name="recruiter" onChange={(event) => setRecruiter(event.target.value)}/>
                    <label for="recruiter_email">Recruiter email</label>
                    <input type="text" id="recruiter_email" name="recruiter_email" onChange={(event) => setRecruiterEmail(event.target.value)}/>
                </div>
                <div className="center">
                     <button type="submit" onClick={()=> console.log('button clicked')}>Submit entry</button>
                </div>
            </form>
        </div>
    )
}