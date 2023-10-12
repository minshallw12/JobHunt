import { Link } from "react-router-dom";
import { useState } from "react";

// We are passing the current list of entries as a prop from the HomePage page.
export default function ApplicationsList({ entries }) {
    const [followedUp, setFollowedUp] = useState({});

        // Function to increment the followedUp field for a specific application
        const incrementFollowedUp = (id) => {
            setFollowedUp((prevFollowedUp) => ({
                ...prevFollowedUp,
                [id]: (prevFollowedUp[id] || 0) + 1,
            }));
        };
    
        // Function to decrement the followedUp field for a specific application
        const decrementFollowedUp = (id) => {
            setFollowedUp((prevFollowedUp) => ({
                ...prevFollowedUp,
                [id]: (prevFollowedUp[id] || 0) - 1,
            }));
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
                        <span className="cell">{followed_up}</span>
                        <button onClick={() => incrementFollowedUp(id)}>+</button>
                        <button onClick={() => decrementFollowedUp(id)}>-</button>
                        <span className="cell">{req_number}</span>
                        <span className="cell">{recruiter}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
}
