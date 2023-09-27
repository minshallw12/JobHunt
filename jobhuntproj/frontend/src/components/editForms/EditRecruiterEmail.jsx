import { useState } from "react";
import { useParams } from "react-router-dom";
import { editRecruiterEmail } from "../../utilities";

export default function EditRecruiterEmail() {
    const { id } = useParams()
    const [recruiterEmail, setRecruiterEmail] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const success = await editRecruiterEmail(
          id,
          recruiterEmail
        );
    
        if (success) {
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