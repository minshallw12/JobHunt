import { useState } from "react";
import { useParams } from "react-router-dom";
import { editRecruiter } from "../../utilities";

export default function EditRecruiter({onRecruiterUpdated}) {
    const { id } = useParams()
    const [recruiter, setRecruiter] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const success = await editRecruiter(
          id,
          recruiter
        );
    
        if (success) {
          onRecruiterUpdated(recruiter)
          setRecruiter("");
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