import { useLoaderData } from "react-router-dom";


export default function ApplicationsList() {
    const applications = useLoaderData();
    
    return (
        <div>
            <h3>My list of applications</h3>
            <ol>
                {
                    applications.map(({company, role, date_applied})=> (
                        <li>{company} {role} {date_applied}</li>
                    ))
                }
            </ol>


        </div>
    )
}