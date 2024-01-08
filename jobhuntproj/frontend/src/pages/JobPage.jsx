import { useParams, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteApplication, followUp, getInterview } from "../utilities";
import { useEffect, useState } from "react";
import EditCompany from "../components/editForms/EditCompany";
import EditRole from "../components/editForms/EditRole";
import EditDate from "../components/editForms/EditDate";
import EditRecruiter from "../components/editForms/EditRecruiter";
import EditRecruiterEmail from "../components/editForms/EditRecruiterEmail";
import EditReferral from "../components/editForms/EditReferral";
import EditReferralEmail from "../components/editForms/EditReferralEmail";
import EditReq from "../components/editForms/EditReq";
import EditRejected from "../components/editForms/EditRejected";
import EditPortal from "../components/editForms/EditPortal";

export default function JobPage() {
    const [editFlag, setEditFlag] = useState(null)
    const [interview, setInterview] = useState(null)
    const id = useParams()
    
    // Initialize data state with loader data
    const initialData = useLoaderData()
    const [data, setData] = useState(JSON.parse(initialData));
    const [followedUp, setFollowedUp] = useState(data.followed_up)

    useEffect(()=> {
        setFollowedUp(data.followed_up);
    }, [data.followedUp])

    // Helper functions
    const handleIncrement = async(direction) => {
        const updatedFollowedUp = direction === 'increment' ? followedUp + 1 : followedUp - 1;
        const success = await followUp(id, direction, updatedFollowedUp);
        if (success) {
            setFollowedUp(updatedFollowedUp)
        }
    };
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
    };

    // These functions will update specific data fields
    const updateCompany = (newCompany) => updateData("company", newCompany);
    const updateRole = (newRole) => updateData("role", newRole);
    const updateDate = (newDate) => updateData("date_applied", newDate);
    const updateRejected = (newRej) => updateData("rejected", newRej);  
    const updateReq = (newReq) => updateData("req_number", newReq);
    const updateRecruiter = (newRecruiter) => updateData("recruiter", newRecruiter);
    const updateRecruiterEmail = (newRecruiterEmail) => updateData("recruiter_email", newRecruiterEmail);
    const updateReferral = (newRef) => updateData("referral", newRef);
    const updateReferralEmail = (newRefEmail) => updateData("referral_email", newRefEmail);
    const updatePortal = (newPortal) => updateData("portal_url", newPortal);

    // this maps the proper edit form when the user selects a field to edit
    const editComponents = {
        company: <EditCompany onCompanyUpdated={updateCompany} setEditFlag={setEditFlag} />,
        role: <EditRole onRoleUpdated={updateRole}  setEditFlag={setEditFlag} />,
        date_applied: <EditDate onDateUpdated={updateDate}  setEditFlag={setEditFlag} />,
        req_number: <EditReq onReqUpdated={updateReq}  setEditFlag={setEditFlag} />,
        rejected: <EditRejected onRejectedUpdated={updateRejected}  setEditFlag={setEditFlag} />,
        recruiter: <EditRecruiter onRecruiterUpdated={updateRecruiter}  setEditFlag={setEditFlag} />,
        recruiter_email: <EditRecruiterEmail onRecEmailUpdated={updateRecruiterEmail}  setEditFlag={setEditFlag} />,
        referral: <EditReferral onReferralUpdated={updateReferral}  setEditFlag={setEditFlag} />,
        referral_email: <EditReferralEmail onRefEmailUpdated={updateReferralEmail}  setEditFlag={setEditFlag} />,
        portal_url: <EditPortal onPortalUpdated={updatePortal} setEditFlag={setEditFlag} />
      };
      


    return (
        <div>
            <Link to={"/"}><button>Back</button></Link>
            <h2>This is a job page</h2>
            <div className="jobPage">
                <div className="jobDetail">
                    <div >
                        <span className="datatitle" onClick={()=>setEditFlag("company")}>Company: </span><span>{data.company}</span>
                    </div>
                    <div >
                        <span className="datatitle" onClick={()=>setEditFlag("role")}>Role: </span><span>{data.role} </span>
                    </div>
                    <div >
                        <span className="datatitle" onClick={()=>setEditFlag("date_applied")}>Date Applied: </span><span>{data.date_applied}</span>
                    </div>
                    <div >
                        <span className="datatitle" onClick={()=>setEditFlag("req_number")}>Req#: </span><span>{data.req_number}</span> 
                    </div>
                    <div>
                        {/* this field takes the useState value instead of the data value from the loader. This allows the useEffect to work. */}
                        <span>Followed up: </span><span>{followedUp}</span>
                        <button onClick={()=>handleIncrement('increment')}> + </button>
                        <button onClick={()=>handleIncrement('decrement')}> - </button>
                    </div>
                    <div>
                        <span className="datatitle" onClick={()=>setEditFlag("rejected")}>Rejected: </span><span>{showRejected(data.rejected)}</span>
                    </div>
                    <div>
                        <span className="datatitle" onClick={()=>setEditFlag("recruiter")}>Recruiter: </span><span>{data.recruiter} </span>
                    </div>
                    <div>
                        <span className="datatitle" onClick={()=>setEditFlag("recruiter_email")}>Recruiter Email: </span><span>{data.recruiter_email}</span>
                    </div>
                    <div>
                        <span className="datatitle" onClick={()=>setEditFlag("referral")}>Referral: </span><span>{data.referral} </span>
                    </div>
                    <div>
                        <span className="datatitle" onClick={()=>setEditFlag("referral_email")}>Referral Email: </span><span>{data.referral_email}</span>
                    </div>
                    <div>
                        <span className="datatitle" onClick={()=>setEditFlag("portal_url")}>Applicant Portal: </span><a href={data.portal_url} target="_blank">{data.portal_url}</a>
                    </div>
                    <div>
                        <Link to={'/delete'}><button onClick={handleDelete}>Delete</button></Link>
                    </div>
                </div>

        <div>{editFlag && editComponents[editFlag]}</div>
        
            </div>
        </div>
    )
}