import { useParams, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteApplication, increment, decrement, } from "../utilities";
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



    const incrementFollowUp = async() => {
        await increment(id);
    };
    const decrementFollowUp = async() => {
        await decrement(id);
    };
    const handleDelete = async() => {
        await deleteApplication(id);
    };

    //consolidate update functions
    const updateData = (property, newValue) => {
        setData((prevData) => ({
            ...prevData,
            [property]:newValue
        }))
    }

    const updateCompany = (newCompany) => updateData("company", newCompany);
    const updateRole = (newRole) => updateData("role", newRole);
    const updateDate = (newDate) => updateData("date_applied", newDate);
    const updateRejected = (newRej) => updateData("rejected", newRej);  
    const updateReq = (newReq) => updateData("req_number", newReq);
    const updateRecruiter = (newRecruiter) => updateData("recruiter", newRecruiter);
    const updateRecruiterEmail = (newRecruiterEmail) => updateData("recruiter_email", newRecruiterEmail);
    const updateReferral = (newRef) => updateData("referral", newRef);
    const updateReferralEmail = (newRefEmail) => updateData("referral_email", newRefEmail);

    const showRejected = (data) => {
        console.log(data.rejected, "data.rejected")
        return data.rejected ? "Yes" : "No"
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
                        <button onClick={incrementFollowUp}> + </button>
                        <button onClick={decrementFollowUp}> - </button>
                    </div>
                    <div>
                        <span onClick={()=>setEditFlag("rejected")}>Rejected: </span><span>{showRejected(data)}</span>
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
        <div>
             {(() => {
        switch(editFlag) {
          case 'company':
            return <EditCompany onCompanyUpdated={updateCompany}/>
          case 'role':
            return <EditRole onRoleUpdated={updateRole}/>
          case 'date_applied':
            return <EditDate onDateUpdated={updateDate}/>
          case 'req_number':
            return <EditReq onReqUpdated={updateReq}/>
          case 'rejected':
            return <EditRejected onRejectedUpdated={updateRejected}/>
          case 'recruiter':
            return <EditRecruiter onRecruiterUpdated={updateRecruiter}/>
          case 'recruiter_email':
            return <EditRecruiterEmail onRecEmailUpdated={updateRecruiterEmail}/>
          case 'referral':
            return <EditReferral onReferralUpdated={updateReferral}/>
          case 'referral_email':
            return <EditReferralEmail onRefEmailUpdated={updateReferralEmail}/>
          default:
            return null
        }
      })()}
        </div>
            </div>
            
        </div>
    )
}