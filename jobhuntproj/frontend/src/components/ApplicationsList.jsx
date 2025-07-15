import { useLoaderData } from "react-router-dom";
import { useState} from "react";
import { followUpFromList } from "../utilities";
import ListItem from "./ListItem";

// We are passing the current list of entries as a prop from the HomePage page.
export default function ApplicationsList() {
    const initialData = useLoaderData()
    const [data, setData] = useState(initialData);

    // helper function to increment follow up stats
    const handleIncrement = async (id, direction) => {
        try {
            const updatedData = await followUpFromList(id, direction); // this is a list
            setData(updatedData); // just replace state with fresh list from backend
        } catch (err) {
            console.error("Failed to update follow-up", err);
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
               
                {data.map(({ id, company, role, date_applied, followed_up, req_number, rejected, portal_url }) => (
                    <ListItem 
                        key={id}
                        id={id} 
                        company={company} 
                        role={role} 
                        date_applied={date_applied} 
                        followed_up={followed_up} 
                        rejected={rejected} 
                        req_number={req_number} 
                        portal_url={portal_url}
                        handleIncrement={handleIncrement}
                    />
                ))}
            </table>
        </div>
    );
}
