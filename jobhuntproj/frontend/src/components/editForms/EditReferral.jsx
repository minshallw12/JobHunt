import { useState } from "react";
import { useParams } from "react-router-dom";
import { editReferral } from "../../utilities";

export default function Editreferral() {
    const { id } = useParams()
    const [referral, setReferral] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const success = await editReferral(
          id,
          referral
        );
    
        if (success) {
          setReferral("");
        } else {
          console.error("Edit request failed");
        }
      };

    return (
        <div className="editForm">
            <form onSubmit={handleSubmit}>
                <label for="referral">Edit referral</label>
                <input type="text" id="referral" name="referral" onChange={(event) => setReferral(event.target.value)}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}