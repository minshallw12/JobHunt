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
            <table>
                <tr>
                    <th>ID#</th>
                    <th >Company</th>
                    <th>Role</th>
                    <th>Date Applied</th>
                    <th>Followed Up</th>
                    <th>Req #</th>
                    <th>App Portal</th>
                </tr>
               
                {entries.map(({ id, company, role, date_applied, followed_up, req_number, recruiter, portal_url }) => (
                    <tr key={id}>
                        <td>
                            <div>
                                {id}
                                <Link to={`/application/${id}`}>
                                    <button>Go</button>
                                </Link>
                            </div>
                            
                        </td>
                        <td>{company}</td>
                        <td>{role}</td>
                        <td>{date_applied}</td>
                        <td>{followed_up}
                            <button onClick={() => handleIncrement(id, 'increment')}>+</button>
                            <button onClick={() => handleIncrement(id, 'decrement')}>-</button>
                        </td>
                        <td>{req_number}</td>
                        {
                            portal_url ?
                                <td><a href={portal_url} target="_blank">Visit</a></td>
                            :
                                <td></td>
                        }
                    </tr>
                ))}
            </table>
        </div>
    );
}
