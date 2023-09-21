import ApplicationsList from "../components/ApplicationsList";
import EntryForm from "../components/EntryForm";

export default function HomePage() {

    return (
        <div>
            <h1>This is my Jobhunt App</h1>

            <EntryForm/>

            <ApplicationsList/>
        </div>
    )
}