import ApplicationsList from "../components/ApplicationsList";
import EntryForm from "../components/EntryForm";
import Stats from "../components/Stats";
import { useEffect, useState } from "react";
import { getApplications } from "../utilities";
import { useLoaderData, useNavigate } from "react-router-dom";
import InterviewsList from "../components/InterviewsList";
import InterviewForm from "../components/InterviewForm";

export default function HomePage() {
    const [interviews, setInterviews] = useState([]); //  <-- Need to build this out
    const [interviewFlag, setIntervewFlag]= useState(false);
    const [entryFlag, setEntryFlag] = useState(false);

    const applications = useLoaderData();

    // Helper functions
    const updateEntries = (newEntries) => {setEntries(newEntries)};
    const toggleEntryForm = () => {setEntryFlag(!entryFlag)};
    const toggleInterviewFlag = () => {setIntervewFlag(!interviewFlag)}

    return (
        <div>
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

                    <div className="contentRail">
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
                    </div>
                }
            
            <div className="contentRail">
                {
                    interviewFlag?
                    
                    <div>
                        <InterviewForm/>
                        <InterviewsList/>
                    </div>
                   
                    :
                    <ApplicationsList/>
                }
            </div>

        </div>
    )
}
