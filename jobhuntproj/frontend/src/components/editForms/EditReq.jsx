import { useState } from "react";
import { useParams } from "react-router-dom";
import { editReq } from "../../utilities";

export default function EditReq() {
    const { id } = useParams()
    const [req_number, setReq] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const success = await editReq(
          id,
          req_number
        );
    
        if (success) {
          setReq("");
        } else {
          console.error("Edit request failed");
        }
      };

    return (
        <div className="editForm">
            <form onSubmit={handleSubmit}>
                <label for="req">Edit Req #</label>
                <input type="text" id="req" name="req" onChange={(event) => setReq(event.target.value)}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}