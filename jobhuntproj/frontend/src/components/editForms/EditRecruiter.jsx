import { useState } from "react";
import { useParams } from "react-router-dom";
import { updateField } from "../../utilities";

export default function EditRecruiter({onRecruiterUpdated, setEditFlag }) {
    const { id } = useParams()
    const [recruiter, setRecruiter] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const success = await updateField(id, "recruiter", recruiter);
    
        if (success) {
          onRecruiterUpdated(recruiter)
          setRecruiter("");
          setEditFlag(null);
        } else {
          console.error("Edit request failed");
        }
      };

    return (
        <div className="editForm">
            <form onSubmit={handleSubmit}>
                <label for="recruiter">Edit recruiter</label>
                <input type="text" id="recruiter" name="recruiter" onChange={(event) => setRecruiter(event.target.value)}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}