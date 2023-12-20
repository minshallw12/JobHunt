import { useState } from "react";
import { useParams } from "react-router-dom";
import { updateField } from "../../utilities";

export default function EditPortal({ onPortalUpdated, setEditFlag  }) {
    const { id } = useParams();
    const [portal, setPortal] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const success = await updateField(id, "portal_url", portal);

        if (success) {
            // Call the callback function to update the company name in the JobPage component
            onPortalUpdated(portal);
            setPortal("");
            setEditFlag(null);
        } else {
            console.error("Edit request failed");
        }
    };

    return (
        <div className="editForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="portal">Edit Portal</label>
                <input type="text" id="portal" name="portal" onChange={(event) => setPortal(event.target.value)} />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}
