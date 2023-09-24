import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ApplicationsList() {
    const applications = useLoaderData();
    
    return (
        <div>
            <h3>My list of applications</h3>
            <div className="tableRow">
                <h4 className="smallCell">ID#</h4>
                <h4 className="cell">Company</h4>
                <h4 className="cell">Role</h4>
                <h4 className="cell">Date Applied</h4>
            </div>
            <ol>
                {
                    applications.map(({id,company, role, date_applied})=> (
                        <li className="tableRow">
                            <span className="smallCell">{id}</span>
                            <Link to={`/application/${id}`}><button>Go</button></Link>
                            <span className="cell">{company}</span>
                            <span className="cell">{role}</span>
                            <span className="cell">{date_applied}</span>
                        </li>
                    ))
                }
            </ol>


        </div>
    )
}