import ApplicationsList from "../components/ApplicationsList";
import EntryForm from "../components/EntryForm";
import { useEffect, useState } from "react";
import { getApplications } from "../utilities";

export default function HomePage() {
    const [entries, setEntries] = useState([]);

    // The useEffect clause rerenders the page when a new entry is added.
    useEffect(() => {
        getApplications().then((data) => {
            setEntries(data);
        });
    }, []);

    const updateEntries = (newEntries) => {
        setEntries(newEntries);
    };

    // The updated entries must be passed as a prop to the EntryForm.
    // The current entries are stored in the useState and passed to the ApplicationsList component.
    return (
        <div>
            <h1>This is my Jobhunt App</h1>

            <EntryForm onEntryAdded={updateEntries}/>

            <ApplicationsList  entries={entries} />
        </div>
    )
}