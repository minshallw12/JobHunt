import ApplicationsList from "../components/ApplicationsList";
import EntryForm from "../components/EntryForm";
import { useEffect, useState } from "react";
import { getApplications } from "../utilities";

export default function HomePage() {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        // Fetch entries from the database when the component mounts
        getApplications().then((data) => {
            setEntries(data);
        });
    }, []);

    const updateEntries = (newEntries) => {
        setEntries(newEntries);
    };

    return (
        <div>
            <h1>This is my Jobhunt App</h1>

            <EntryForm onEntryAdded={updateEntries}/>

            <ApplicationsList  entries={entries} />
        </div>
    )
}