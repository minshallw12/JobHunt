import { useState } from "react";
import { useParams } from "react-router-dom";
import { editCompany } from "../../utilities";

export default function EditCompany() {
    const { id } = useParams()
    const [company, setCompany] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const success = await editCompany(
          id,
          company
        );
    
        if (success) {
          setCompany("");
        } else {
          console.error("Edit request failed");
        }
      };

    return (
        <div className="editForm">
            <form onSubmit={handleSubmit}>
                <label for="company">Edit Company</label>
                <input type="text" id="company" name="company" onChange={(event) => setCompany(event.target.value)}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}