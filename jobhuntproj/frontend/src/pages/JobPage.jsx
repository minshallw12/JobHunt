import { useParams, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteApplication, increment, decrement, } from "../utilities";
import { useState } from "react";
import EditCompany from "../components/editForms/EditCompany";
import EditRole from "../components/editForms/EditRole";
import EditDate from "../components/editForms/EditDate";
import EditRecruiter from "../components/editForms/EditRecruiter";
import EditRecruiterEmail from "../components/editForms/EditRecruiterEmail";
import Editreferral from "../components/editForms/EditReferral";
import EditReferralEmail from "../components/editForms/EditReferralEmail";
import EditReq from "../components/editForms/EditReq";
import EditRejected from "../components/editForms/EditRejected";

export default function JobPage() {
    const [editFlag, setEditFlag] = useState(null)
    const id = useParams()
    const [data, setData] = useState(JSON.parse(useLoaderData())); // Initialize data state with loader data
    
    console.log(data)

    const incrementFollowUp = async() => {
        await increment(id);
    }

    const decrementFollowUp = async() => {
        await decrement(id);
    }

    const handleDelete = async() => {
        await deleteApplication(id);
    }

    const toggleCompany = () =>  {
        setEditFlag("company");
        console.log(`editFlag is ${editFlag}`)
    }
    const toggleRole = () =>  {
        setEditFlag("role");
        console.log(`editFlag is ${editFlag}`)
    }
    const toggleDate = () =>  {
        setEditFlag("date_applied");
        console.log(`editFlag is ${editFlag}`)
    }
    const toggleReq = () =>  {
        setEditFlag("req_number");
        console.log(`editFlag is ${editFlag}`)
    }
    const toggleRejected = () =>  {
        setEditFlag("rejected");
        console.log(`editFlag is ${editFlag}`)
    }
    const toggleRecruiter = () =>  {
        setEditFlag("recruiter");
        console.log(`editFlag is ${editFlag}`)
    }
    const toggleRecruiterEmail = () =>  {
        setEditFlag("recruiter_email");
        console.log(`editFlag is ${editFlag}`)
    }
    const toggleReferral = () =>  {
        setEditFlag("referral");
        console.log(`editFlag is ${editFlag}`)
    }
    const toggleReferralEmail = () =>  {
        setEditFlag("referral_email");
        console.log(`editFlag is ${editFlag}`)
    }

    const updateCompany = (newCompany) => {
        // Update the 'data' object with the new company name
        setData((prevData) => ({
            ...prevData,
            company: newCompany,
        }));
    };
    const updateRole = (newRole) => {
        setData((prevData) => ({
            ...prevData,
            role: newRole,
        }));
    };
    const updateDate = (newDate) => {
        setData((prevData) => ({
            ...prevData,
            date_applied: newDate,
        }));
    };
    const updateReq = (newReq) => {
        setData((prevData) => ({
            ...prevData,
            req_number: newReq,
        }));
    };

    return (
        <div>
            <Link to={"/"}><button>Back</button></Link>
            <h2>This is a job page</h2>
            <div className="jobPage">
                <div className="jobDetail">
                    <div>
                        <span onClick={toggleCompany}>Company: </span><span>{data.company}</span>
                    </div>
                    <div>
                        <span onClick={toggleRole}>Role: </span><span>{data.role} </span>
                    </div>
                    <div>
                        <span onClick={toggleDate}>Date Applied: </span><span>{data.date_applied}</span>
                    </div>
                    <div>
                        <span onClick={toggleReq}>Req#: </span><span>{data.req_number}</span> 
                    </div>
                    <div>
                        <span>Followed up: </span><span>{data.followed_up}</span>
                        <button onClick={incrementFollowUp}> + </button>
                        <button onClick={decrementFollowUp}> - </button>
                    </div>
                    <div>
                        <span onClick={toggleRejected}>Rejected: </span><span>{data.rejected}</span>
                    </div>
                    <div>
                        <span onClick={toggleRecruiter}>Recruiter: </span><span>{data.recruiter} </span>
                    </div>
                    <div>
                        <span onClick={toggleRecruiterEmail}>Recruiter Email: </span><span>{data.recruiter_email}</span>
                    </div>
                    <div>
                        <span onClick={toggleReferral}>Referral: </span><span>{data.referral} </span>
                    </div>
                    <div>
                        <span onClick={toggleReferralEmail}>Referral Email: </span><span>{data.referral_email}</span>
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
            return <EditRejected/>
          case 'recruiter':
            return <EditRecruiter/>
          case 'recruiter_email':
            return <EditRecruiterEmail/>
          case 'referral':
            return <Editreferral/>
          case 'referral_email':
            return <EditReferralEmail/>
          default:
            return null
        }
      })()}
        </div>
            </div>
            
        </div>
    )
}