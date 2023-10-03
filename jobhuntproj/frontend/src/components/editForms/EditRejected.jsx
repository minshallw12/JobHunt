import { useState } from "react";
import { useParams } from "react-router-dom";
import { updateField } from "../../utilities";

export default function EditRejected({onRejectedUpdated}) {
    const { id } = useParams()
    const [rejected, setRejected] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const success = await updateField(id, "rejected", rejected);
    
        if (success) {
          onRejectedUpdated(rejected);
          } else {
          console.error("Edit request failed");
          };
        };

    return (
        <div className="editForm">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Rejected?</legend>
                    <div>
                        <input type="radio" id="yes" name="rejected" onChange={()=>setRejected(true)}/>
                        <label for="rejected">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="rejected" onChange={()=>setRejected(false)}/>
                        <label for="rejected">No</label>
                    </div>
                </fieldset>
                <button type="submit">Save</button>
            </form>
        </div>
    )
};
