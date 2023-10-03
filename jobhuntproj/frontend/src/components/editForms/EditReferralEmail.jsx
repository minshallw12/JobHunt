import { useState } from "react";
import { useParams } from "react-router-dom";
import { updateField } from "../../utilities";

export default function EditReferralEmail({onRefEmailUpdated}) {
    const { id } = useParams()
    const [referralEmail, setReferralEmail] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const success = await updateField(id,"referral_email", referralEmail);
    
        if (success) {
          onRefEmailUpdated(referralEmail)
          setReferralEmail("");
        } else {
          console.error("Edit request failed");
        }
      };

    return (
        <div className="editForm">
            <form onSubmit={handleSubmit}>
                <label for="referralEmail">Edit ReferralEmail</label>
                <input type="text" id="referralEmail" name="referralEmail" onChange={(event) => setReferralEmail(event.target.value)}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}