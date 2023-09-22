import { useParams, useLoaderData } from "react-router-dom";


export default function JobPage() {
    // const {id} = useParams();
    const data = JSON.parse(useLoaderData())
    console.log(data)

    return (
        <div>
            <h2>This is a job page</h2>
            <span>{data.company} {data.role}</span>
        </div>
    )
}