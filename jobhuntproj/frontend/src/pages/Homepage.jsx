import ApplicationsList from "../components/ApplicationsList";
import EntryForm from "../components/EntryForm";
import Stats from "../components/Stats";
import { useEffect, useState } from "react";
import { getApplications } from "../utilities";
import { useLoaderData } from "react-router-dom";

export default function HomePage() {
    const [entries, setEntries] = useState([]);
    const [entryFlag, setEntryFlag] = useState(false);
    const applications = useLoaderData();

    // The useEffect clause rerenders the page when a new entry is added.
    useEffect(() => {
        getApplications().then((data) => {
            setEntries(data);
        });
    }, []);

    // Helper functions
    const updateEntries = (newEntries) => {setEntries(newEntries)};
    const toggleEntryForm = () => {entryFlag ? setEntryFlag(false) : setEntryFlag(true)};

    // The updated entries must be passed as a prop to the EntryForm.
    // The current entries are stored in the useState and passed to the ApplicationsList component.
    return (
        <div>
            <h1 className="center padding">Job Tracker</h1>
            
                {
                    entryFlag 
                    ?
                    <div className="center">
                        <div className="entrybutton">
                            <EntryForm onEntryAdded={updateEntries} toggleEntryForm={toggleEntryForm}/>
                            <div className="center">
                                <button onClick={toggleEntryForm}>Close</button>
                            </div>
                            
                        </div>
                            
                    </div> 
                    :

                    <div className="stats">
                        <Stats applications={applications}/>
                        <div className="center">
                            <button onClick={toggleEntryForm}>Add Entry</button>
                        </div>
                        
                    </div>
                }
            
            <div className="center padding">
                <ApplicationsList  entries={entries} />
            </div>

        </div>
    )
}