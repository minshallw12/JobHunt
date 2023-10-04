import { Link } from "react-router-dom";

// We are passing the current list of entries as a prop from the HomePage page.
export default function ApplicationsList({ entries }) {
    return (
        <div>
            <h3>My list of applications</h3>
            <ol>
                <li className="tableRow">
                    <h4 className="smallCell">ID#</h4>
                    <h4 className="cell">Company</h4>
                    <h4 className="cell">Role</h4>
                    <h4 className="cell">Date Applied</h4>
                    <h4 className="cell">Req #</h4>
                    <h4 className="cell">Recruiter</h4>
                </li>
                {/* Mapping the data fields to the respective spaces on frontend in list format */}
                {entries.map(({ id, company, role, date_applied, req_number, recruiter }) => (
                    <li className="tableRow" key={id}>
                        <span className="smallCell">{id}</span>
                        <Link to={`/application/${id}`}>
                            <button>Go</button>
                        </Link>
                        <span className="cell">{company}</span>
                        <span className="cell">{role}</span>
                        <span className="cell">{date_applied}</span>
                        <span className="cell">{req_number}</span>
                        <span className="cell">{recruiter}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
}
