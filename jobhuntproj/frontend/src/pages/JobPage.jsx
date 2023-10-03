import { useParams, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteApplication, increment, decrement, followUp, } from "../utilities";
import { useState } from "react";
import EditCompany from "../components/editForms/EditCompany";
import EditRole from "../components/editForms/EditRole";
import EditDate from "../components/editForms/EditDate";
import EditRecruiter from "../components/editForms/EditRecruiter";
import EditRecruiterEmail from "../components/editForms/EditRecruiterEmail";
import EditReferral from "../components/editForms/EditReferral";
import EditReferralEmail from "../components/editForms/EditReferralEmail";
import EditReq from "../components/editForms/EditReq";
import EditRejected from "../components/editForms/EditRejected";

export default function JobPage() {
    const [editFlag, setEditFlag] = useState(null)
    const id = useParams()
    
    // Initialize data state with loader data
    const [data, setData] = useState(JSON.parse(useLoaderData())); 
    console.log(data)

    // Helper functions
    const handleIncrement = async(direction) => {
        await followUp(id, direction);
    }
    const handleDelete = async() => {
        await deleteApplication(id);
    };
    const showRejected = (data) => {
        return data ? "Yes" : "No"
    };
    const updateData = (property, newValue) => {
        setData((prevData) => ({
            ...prevData,
            [property]:newValue
        }))
    }

    // These functions will update data
    const updateCompany = (newCompany) => updateData("company", newCompany);
    const updateRole = (newRole) => updateData("role", newRole);
    const updateDate = (newDate) => updateData("date_applied", newDate);
    const updateRejected = (newRej) => updateData("rejected", newRej);  
    const updateReq = (newReq) => updateData("req_number", newReq);
    const updateRecruiter = (newRecruiter) => updateData("recruiter", newRecruiter);
    const updateRecruiterEmail = (newRecruiterEmail) => updateData("recruiter_email", newRecruiterEmail);
    const updateReferral = (newRef) => updateData("referral", newRef);
    const updateReferralEmail = (newRefEmail) => updateData("referral_email", newRefEmail);

    // this maps the proper edit form when the user selects a field to edit
    const editComponents = {
        company: <EditCompany onCompanyUpdated={updateCompany} />,
        role: <EditRole onRoleUpdated={updateRole} />,
        date_applied: <EditDate onDateUpdated={updateDate} />,
        req_number: <EditReq onReqUpdated={updateReq} />,
        rejected: <EditRejected onRejectedUpdated={updateRejected} />,
        recruiter: <EditRecruiter onRecruiterUpdated={updateRecruiter} />,
        recruiter_email: <EditRecruiterEmail onRecEmailUpdated={updateRecruiterEmail} />,
        referral: <EditReferral onReferralUpdated={updateReferral} />,
        referral_email: <EditReferralEmail onRefEmailUpdated={updateReferralEmail} />,
      };
      


    return (
        <div>
            <Link to={"/"}><button>Back</button></Link>
            <h2>This is a job page</h2>
            <div className="jobPage">
                <div className="jobDetail">
                    <div>
                        <span onClick={()=>setEditFlag("company")}>Company: </span><span>{data.company}</span>
                    </div>
                    <div>
                        <span onClick={()=>setEditFlag("role")}>Role: </span><span>{data.role} </span>
                    </div>
                    <div>
                        <span onClick={()=>setEditFlag("date_applied")}>Date Applied: </span><span>{data.date_applied}</span>
                    </div>
                    <div>
                        <span onClick={()=>setEditFlag("req_number")}>Req#: </span><span>{data.req_number}</span> 
                    </div>
                    <div>
                        <span>Followed up: </span><span>{data.followed_up}</span>
                        <button onClick={()=>handleIncrement('increment')}> + </button>
                        <button onClick={()=>handleIncrement('decrement')}> - </button>
                    </div>
                    <div>
                        <span onClick={()=>setEditFlag("rejected")}>Rejected: </span><span>{showRejected(data.rejected)}</span>
                    </div>
                    <div>
                        <span onClick={()=>setEditFlag("recruiter")}>Recruiter: </span><span>{data.recruiter} </span>
                    </div>
                    <div>
                        <span onClick={()=>setEditFlag("recruiter_email")}>Recruiter Email: </span><span>{data.recruiter_email}</span>
                    </div>
                    <div>
                        <span onClick={()=>setEditFlag("referral")}>Referral: </span><span>{data.referral} </span>
                    </div>
                    <div>
                        <span onClick={()=>setEditFlag("referral_email")}>Referral Email: </span><span>{data.referral_email}</span>
                    </div>
                    <div>
                        <Link to={'/delete'}><button onClick={handleDelete}>Delete</button></Link>
                    </div>
                </div>

        <div>{editComponents[editFlag]}</div>
        
            </div>
        </div>
    )
}