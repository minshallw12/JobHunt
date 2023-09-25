import { useParams, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteApplication, increment, decrement } from "../utilities";
import { useState } from "react";
import EditForm from "../components/EditForm";


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

    const toggleEdit = () =>  {
        if (editFlag) {
            setEditFlag(false);
        } else {
            setEditFlag(true);
        }
        console.log(`editFlag is ${editFlag}`)
    }

    return (
        <div>
            <Link to={"/"}><button>Back</button></Link>
            <h2>This is a job page</h2>
            <div className="jobPage">
                <div className="jobDetail">
                    <div>
                        <span>Company: </span><span>{data.company}</span>
                    </div>
                    <div>
                        <span>Role: </span><span>{data.role} </span>
                    </div>
                    <div>
                        <span>Date Applied: </span><span>{data.date_applied}</span>
                    </div>
                    <div>
                        <span>Req#: </span><span>{data.req_number}</span> 
                    </div>
                    <div>
                        <span>Followed up: </span><span>{data.followed_up}</span>
                        <button onClick={incrementFollowUp}> + </button>
                        <button onClick={decrementFollowUp}> - </button>
                    </div>
                    <div>
                        <span>Rejected: </span><span>{data.rejected}</span>
                    </div>
                    <div>
                        <span>Recruiter: </span><span>{data.recruiter} </span>
                    </div>
                    <div>
                        <span>Recruiter Email: </span><span>{data.recruiter_email}</span>
                    </div>
                    <div>
                        <span>Referral: </span><span>{data.referral} </span>
                    </div>
                    <div>
                        <span>Referral Email: </span><span>{data.referral_email}</span>
                    </div>
                    <div>
                        <button onClick={toggleEdit}>Edit</button>
                        <Link to={'/delete'}><button onClick={handleDelete}>Delete</button></Link>
                    </div>
                </div>    
                {
                    editFlag ?
                    <EditForm/>:
                    <h3>False</h3>

                }
                    
                
            </div>
            
            
        </div>
    )
}