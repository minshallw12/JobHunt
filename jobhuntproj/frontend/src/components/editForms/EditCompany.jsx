import { useState } from "react";
import { useParams } from "react-router-dom";
import { updateField } from "../../utilities";

export default function EditCompany({ onCompanyUpdated, setEditFlag }) {
    const { id } = useParams();
    const [company, setCompany] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const success = await updateField(id, "company", company);

        if (success) {
            // Call the callback function to update the company name in the JobPage component
            onCompanyUpdated(company);
            setCompany("");
            setEditFlag(null);
        } else {
            console.error("Edit request failed");
        }
    };

    return (
        <div className="editForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="company">Edit Company</label>
                <input type="text" id="company" name="company" onChange={(event) => setCompany(event.target.value)} />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}
