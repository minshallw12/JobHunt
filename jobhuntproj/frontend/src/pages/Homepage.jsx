import ApplicationsList from "../components/ApplicationsList";
import EntryForm from "../components/EntryForm";
import Stats from "../components/Stats";
import { useEffect, useState } from "react";
import { getApplications } from "../utilities";
import { useLoaderData, useNavigate } from "react-router-dom";
import InterviewsList from "../components/InterviewsList";
import InterviewForm from "../components/InterviewForm";

export default function HomePage() {
    const [entries, setEntries] = useState([]);
    const [interviews, setInterviews] = useState([]); //  <-- Need to build this out
    const [interviewFlag, setIntervewFlag]= useState(false);
    const [entryFlag, setEntryFlag] = useState(false);

    const applications = useLoaderData();

    // The useEffect clause rerenders the page when a new entry is added.
    useEffect(() => {
        getApplications().then((data) => {
            // sorts entries by id (order added)
            const sortedEntries = data.sort((a,b) => b.id - a.id);
            setEntries(sortedEntries);
        });
    }, []);

    // Helper functions
    const updateEntries = (newEntries) => {setEntries(newEntries)};
    // const toggleEntryForm = () => {entryFlag ? setEntryFlag(false) : setEntryFlag(true)};
    const toggleEntryForm = () => {setEntryFlag(!entryFlag)};
    const toggleInterviewFlag = () => {setIntervewFlag(!interviewFlag)}

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
                            {
                                interviewFlag?
                                <button onClick={toggleInterviewFlag}>Applications</button>
                                :
                                <button onClick={toggleInterviewFlag}>Interviews</button>
                            }
                        </div>
                        
                    </div>
                }
            
            <div className="center padding">
                {
                    interviewFlag?
                    
                    <div>
                        <InterviewForm/>
                        <InterviewsList/>
                    </div>
                   
                    :
                    <ApplicationsList  entries={entries} />
                }
            </div>

        </div>
    )
}