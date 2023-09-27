import { useState } from "react";
import { useParams } from "react-router-dom";
import { editDate } from "../../utilities";

export default function EditDate() {
    const { id } = useParams()
    const [date, setDate] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const success = await editDate(
          id,
          date
        );
    
        if (success) {
          setDate("");
        } else {
          console.error("Edit request failed");
        }
      };

    return (
        <div className="editForm">
            <form onSubmit={handleSubmit}>
                <label for="date">Edit date</label>
                <input type="date" id="date" name="date" onChange={(event) => setDate(event.target.value)}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}