import { useNavigate } from "react-router-dom";

export default function Interviews() {
    const navigate = useNavigate();


    return (
        <div>
            <h1>My Interviews</h1>
            <button onClick={()=> navigate('/')}>Home</button>
        </div>
    )
}