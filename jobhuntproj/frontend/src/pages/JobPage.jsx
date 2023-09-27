import { useParams, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteApplication, increment, decrement, } from "../utilities";
import { useState } from "react";
import Error from "../components/Error"
import EditCompany from "../components/editForms/EditCompany";
import EditRole from "../components/editForms/EditRole";
import EditDate from "../components/editForms/EditDate";


// function editSelector(state) {
//     return (
//         <div>
//             {(() => {
//         switch(state) {
//           case 'company':
//             return <Error/>
//           case 'role':
//             return <Error/>
//           case 'date_applied':
//             return <Error/>
//           case 'date_applied':
//             return <Error/>
//           case 'req_number':
//             return <Error/>
//           case 'followed_up':
//             return <Error/>
//           case 'rejected':
//             return <Error/>
//           case 'recruiter':
//             return <Error/>
//           case 'recruiter_email':
//             return <Error/>
//           case 'referral':
//             return <Error/>
//           case 'referral_email':
//             return <Error/>
//           default:
//             return null
//         }
//       })()}
//         </div>
//     )
// }

export default function JobPage() {
    const [editFlag, setEditFlag] = useState(false)
    const id = useParams()
    const data = JSON.parse(useLoaderData())
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
            return <EditCompany/>
          case 'role':
            return <EditRole/>
          case 'date_applied':
            return <EditDate/>
          case 'date_applied':
            return <Error/>
          case 'req_number':
            return <Error/>
          case 'followed_up':
            return <Error/>
          case 'rejected':
            return <Error/>
          case 'recruiter':
            return <Error/>
          case 'recruiter_email':
            return <Error/>
          case 'referral':
            return <Error/>
          case 'referral_email':
            return <Error/>
          default:
            return null
        }
      })()}
        </div>
            </div>
            
        </div>
    )
}