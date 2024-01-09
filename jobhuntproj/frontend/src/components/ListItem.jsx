import { Link } from "react-router-dom";

export default function ListItem({ id, company, role, date_applied, followed_up, rejected, req_number, portal_url }) {
    return (
        <tr key={id}>
            <td>
                <div>
                    {id}
                    <Link to={`/application/${id}`}>
                        <button>Go</button>
                    </Link>
                </div>
                
            </td>
            {
                rejected ?
                <td className="red">{company}</td>:
                <td>{company}</td>
            }
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
    )
};