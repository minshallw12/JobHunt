import { Link } from "react-router-dom"

export default function Delete() {
    return (
        <div>
            <h2>Delete successful!</h2>
            <Link to={'/'}><button>Back to Dashboard</button></Link>
        </div>
    )
}