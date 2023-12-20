import { useState } from "react";
import { useParams } from "react-router-dom";
import { updateField } from "../../utilities";

export default function EditReferral({onReferralUpdated, setEditFlag }) {
    const { id } = useParams()
    const [referral, setReferral] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const success = await updateField(id, "referral", referral);
    
        if (success) {
          onReferralUpdated(referral)
          setReferral("");
          setEditFlag(null);
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