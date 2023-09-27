import { useState } from "react";
import { useParams } from "react-router-dom";
import { editRejected } from "../../utilities";

export default function EditRejected() {
    const { id } = useParams()
    const [rejected, setRejected] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const success = await editRejected(
          id,
          rejected
        );
    
        if (success) {
          setRejected("");
        } else {
          console.error("Edit request failed");
        }
      };

    return (
        <div className="editForm">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Rejected?</legend>
                    <div>
                        <input type="radio" id="yes" name="yes" value="true"/>
                        <label for="rejected">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="no" value="false" />
                        <label for="rejected">No</label>
                    </div>
                </fieldset>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}