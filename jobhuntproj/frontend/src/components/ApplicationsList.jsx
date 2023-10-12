import { Link, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { followUp, followUpFromList } from "../utilities";

// We are passing the current list of entries as a prop from the HomePage page.
export default function ApplicationsList({ entries }) {
    const initialData = useLoaderData()
    const [data, setData] = useState(initialData);
    const [followedUp, setFollowedUp] = useState(data.followed_up)

    useEffect(()=> {
        setFollowedUp(data.followed_up);
    }, [data.followed_up])

    const handleIncrement = async(id, direction) => {
        console.log(id)
        const updatedFollowedUp = direction === 'increment' ? followedUp + 1 : followedUp - 1;
        const updatedData = await followUpFromList(id, direction, updatedFollowedUp);
        if (updatedData) {
            setFollowedUp(updatedData)
        }
    };


    return (
        <div id="applicationsList">
            <h2 className="padding center">Applications List</h2>
            <ol>
                <li className="tableRow padding">
                    <h4 className="smallCell">ID#</h4>
                    <h4 className="cell">Company</h4>
                    <h4 className="cell">Role</h4>
                    <h4 className="cell">Date Applied</h4>
                    <h4 className="cell">Followed Up</h4>
                    <h4 className="cell">Req #</h4>
                    <h4 className="cell">Recruiter</h4>
                </li>
                {/* Mapping the data fields to the respective spaces on frontend in list format */}
                {entries.map(({ id, company, role, date_applied, followed_up, req_number, recruiter }) => (
                    <li className="tableRow sm-padding" key={id}>
                        <span className="smallCell">{id}</span>
                        <Link to={`/application/${id}`}>
                            <button>Go</button>
                        </Link>
                        <span className="cell">{company}</span>
                        <span className="cell">{role}</span>
                        <span className="cell">{date_applied}</span>
                        <span className="cell">{followed_up}
                            <button onClick={() => handleIncrement(id, 'increment')}>+</button>
                            <button onClick={() => handleIncrement(id, 'decrement')}>-</button>
                        </span>
                        <span className="cell">{req_number}</span>
                        <span className="cell">{recruiter}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
}
