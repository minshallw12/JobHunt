import { useState } from "react";
import { useParams } from "react-router-dom";
import { updateField } from "../../utilities";

export default function EditRecruiterEmail({onRecEmailUpdated}) {
    const { id } = useParams()
    const [recruiterEmail, setRecruiterEmail] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const success = await updateField(id, "recruiter_email", recruiterEmail);
    
        if (success) {
          onRecEmailUpdated(recruiterEmail)
          setRecruiterEmail("");
        } else {
          console.error("Edit request failed");
        }
      };

    return (
        <div className="editForm">
            <form onSubmit={handleSubmit}>
                <label for="recruiterEmail">Edit Recruiter Email</label>
                <input type="text" id="recruiterEmail" name="recruiterEmail" onChange={(event) => setRecruiterEmail(event.target.value)}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}